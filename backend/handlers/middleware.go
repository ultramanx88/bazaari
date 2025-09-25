package handlers

import (
	"os"
	"strings"

	"bazaari-backend/database"
	"bazaari-backend/models"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func AuthMiddleware(c *fiber.Ctx) error {
	authHeader := c.Get("Authorization")
	if authHeader == "" {
		return c.Status(401).JSON(fiber.Map{"error": "Authorization header required"})
	}

	tokenString := strings.Replace(authHeader, "Bearer ", "", 1)
	
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		secret = "your-secret-key"
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(secret), nil
	})

	if err != nil || !token.Valid {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid token"})
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid token claims"})
	}

	userID := uint(claims["user_id"].(float64))
	
	var user models.User
	if err := database.DB.First(&user, userID).Error; err != nil {
		return c.Status(401).JSON(fiber.Map{"error": "User not found"})
	}

	// Check if user is still active
	if !user.IsActive {
		return c.Status(401).JSON(fiber.Map{"error": "Account is deactivated"})
	}

	c.Locals("user", user)
	return c.Next()
}

// RequireRole creates a middleware that checks if user has required role
func RequireRole(roles ...string) fiber.Handler {
	return func(c *fiber.Ctx) error {
		user, ok := c.Locals("user").(models.User)
		if !ok {
			return c.Status(401).JSON(fiber.Map{"error": "User not authenticated"})
		}

		// Check if user has any of the required roles
		for _, role := range roles {
			if user.Role == role {
				return c.Next()
			}
		}

		return c.Status(403).JSON(fiber.Map{"error": "Insufficient permissions"})
	}
}

// RequireBusinessOwner checks if user is a business owner for the specified business
func RequireBusinessOwner(c *fiber.Ctx) error {
	user, ok := c.Locals("user").(models.User)
	if !ok {
		return c.Status(401).JSON(fiber.Map{"error": "User not authenticated"})
	}

	businessID := c.Params("businessId")
	if businessID == "" {
		businessID = c.Query("businessId")
	}

	if businessID == "" {
		return c.Status(400).JSON(fiber.Map{"error": "Business ID required"})
	}

	// Check if user owns this business
	var userBusiness models.UserBusiness
	err := database.DB.Where("user_id = ? AND business_id = ? AND role IN (?)", 
		user.ID, businessID, []string{"owner", "manager"}).First(&userBusiness).Error
	
	if err != nil {
		return c.Status(403).JSON(fiber.Map{"error": "Access denied: not a business owner or manager"})
	}

	c.Locals("userBusiness", userBusiness)
	return c.Next()
}

// OptionalAuth middleware that doesn't require authentication but sets user if token is provided
func OptionalAuth(c *fiber.Ctx) error {
	authHeader := c.Get("Authorization")
	if authHeader == "" {
		return c.Next()
	}

	tokenString := strings.Replace(authHeader, "Bearer ", "", 1)
	
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		secret = "your-secret-key"
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(secret), nil
	})

	if err == nil && token.Valid {
		if claims, ok := token.Claims.(jwt.MapClaims); ok {
			userID := uint(claims["user_id"].(float64))
			
			var user models.User
			if err := database.DB.First(&user, userID).Error; err == nil {
				c.Locals("user", user)
			}
		}
	}

	return c.Next()
}