package handlers

import (
	"strconv"

	"bazaari-backend/database"
	"bazaari-backend/models"

	"github.com/gofiber/fiber/v2"
)

func GetOrders(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	
	var orders []models.Order
	if err := database.DB.Where("user_id = ?", user.ID).Preload("Items.Product").Find(&orders).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch orders"})
	}

	return c.JSON(orders)
}

func GetOrder(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid order ID"})
	}

	var order models.Order
	if err := database.DB.Where("id = ? AND user_id = ?", id, user.ID).Preload("Items.Product").First(&order).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Order not found"})
	}

	return c.JSON(order)
}

func CreateOrder(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	
	var orderData struct {
		Items []struct {
			ProductID uint `json:"product_id"`
			Quantity  int  `json:"quantity"`
		} `json:"items"`
	}

	if err := c.BodyParser(&orderData); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	// Create order
	order := models.Order{
		UserID: user.ID,
		Status: "pending",
	}

	if err := database.DB.Create(&order).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create order"})
	}

	// Add order items and calculate total
	var total float64
	for _, item := range orderData.Items {
		var product models.Product
		if err := database.DB.First(&product, item.ProductID).Error; err != nil {
			continue
		}

		orderItem := models.OrderItem{
			OrderID:   order.ID,
			ProductID: item.ProductID,
			Quantity:  item.Quantity,
			Price:     product.Price,
		}

		database.DB.Create(&orderItem)
		total += product.Price * float64(item.Quantity)
	}

	// Update order total
	order.Total = total
	database.DB.Save(&order)

	// Load order with items
	database.DB.Preload("Items.Product").First(&order, order.ID)

	return c.Status(201).JSON(order)
}