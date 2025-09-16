package routes

import (
	"bazaari-backend/handlers"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	// API v1 group
	api := app.Group("/api/v1")

	// Health check
	api.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status":  "ok",
			"message": "Bazaari API is running",
		})
	})

	// Auth routes
	auth := api.Group("/auth")
	auth.Post("/register", handlers.Register)
	auth.Post("/login", handlers.Login)
	auth.Post("/refresh", handlers.RefreshToken)

	// Protected routes
	protected := api.Group("/")
	protected.Use(handlers.AuthMiddleware)

	// User routes
	users := protected.Group("/users")
	users.Get("/profile", handlers.GetProfile)
	users.Put("/profile", handlers.UpdateProfile)

	// Product routes
	products := api.Group("/products")
	products.Get("/", handlers.GetProducts)
	products.Get("/:id", handlers.GetProduct)
	
	// Protected product routes
	protectedProducts := protected.Group("/products")
	protectedProducts.Post("/", handlers.CreateProduct)
	protectedProducts.Put("/:id", handlers.UpdateProduct)
	protectedProducts.Delete("/:id", handlers.DeleteProduct)

	// Order routes
	orders := protected.Group("/orders")
	orders.Get("/", handlers.GetOrders)
	orders.Post("/", handlers.CreateOrder)
	orders.Get("/:id", handlers.GetOrder)
}