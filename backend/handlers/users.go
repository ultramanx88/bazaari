package handlers

import (
	"bazaari-backend/database"
	"bazaari-backend/models"

	"github.com/gofiber/fiber/v2"
)

func GetProfile(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	return c.JSON(user)
}

func UpdateProfile(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	
	var updateData models.User
	if err := c.BodyParser(&updateData); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	// Update allowed fields
	if updateData.Name != "" {
		user.Name = updateData.Name
	}
	if updateData.Phone != "" {
		user.Phone = updateData.Phone
	}

	if err := database.DB.Save(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to update profile"})
	}

	return c.JSON(user)
}