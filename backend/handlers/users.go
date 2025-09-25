package handlers

import (
	"bazaari-backend/database"
	"bazaari-backend/models"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

type UpdateProfileRequest struct {
	Name  string `json:"name"`
	Phone string `json:"phone"`
}

type ChangePasswordRequest struct {
	CurrentPassword string `json:"current_password" validate:"required"`
	NewPassword     string `json:"new_password" validate:"required,min=6"`
}

func GetProfile(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	
	// Load user businesses if user is business owner
	if user.Role == "business_owner" {
		database.DB.Preload("UserBusinesses.Business").First(&user, user.ID)
	}
	
	return c.JSON(user)
}

func UpdateProfile(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	
	var req UpdateProfileRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	// Update allowed fields
	if req.Name != "" {
		user.Name = req.Name
	}
	if req.Phone != "" {
		user.Phone = req.Phone
	}

	if err := database.DB.Save(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to update profile"})
	}

	return c.JSON(user)
}

func ChangePassword(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	
	var req ChangePasswordRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	// Verify current password
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.CurrentPassword)); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Current password is incorrect"})
	}

	// Hash new password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.NewPassword), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to hash password"})
	}

	// Update password
	user.Password = string(hashedPassword)
	if err := database.DB.Save(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to update password"})
	}

	return c.JSON(fiber.Map{"message": "Password updated successfully"})
}

func GetUserBusinesses(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	
	if user.Role != "business_owner" {
		return c.Status(403).JSON(fiber.Map{"error": "Access denied: not a business owner"})
	}

	var userBusinesses []models.UserBusiness
	err := database.DB.Preload("Business").Where("user_id = ?", user.ID).Find(&userBusinesses).Error
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch businesses"})
	}

	return c.JSON(userBusinesses)
}

func DeactivateAccount(c *fiber.Ctx) error {
	user := c.Locals("user").(models.User)
	
	user.IsActive = false
	if err := database.DB.Save(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to deactivate account"})
	}

	return c.JSON(fiber.Map{"message": "Account deactivated successfully"})
}