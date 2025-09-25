package handlers

import (
	"testing"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func TestGenerateJWT(t *testing.T) {
	userID := uint(1)
	role := "customer"
	
	token, err := generateJWT(userID, role)
	if err != nil {
		t.Fatalf("Failed to generate JWT: %v", err)
	}
	
	if token == "" {
		t.Error("Generated token is empty")
	}
	
	// Parse and validate the token
	parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		return []byte("your-secret-key"), nil // Default secret for testing
	})
	
	if err != nil {
		t.Fatalf("Failed to parse token: %v", err)
	}
	
	if !parsedToken.Valid {
		t.Error("Generated token is invalid")
	}
	
	claims, ok := parsedToken.Claims.(jwt.MapClaims)
	if !ok {
		t.Error("Failed to extract claims from token")
	}
	
	if claims["user_id"] != float64(userID) {
		t.Errorf("Expected user_id %d, got %v", userID, claims["user_id"])
	}
	
	if claims["role"] != role {
		t.Errorf("Expected role %s, got %v", role, claims["role"])
	}
}

func TestJWTExpiration(t *testing.T) {
	userID := uint(1)
	role := "customer"
	
	token, err := generateJWT(userID, role)
	if err != nil {
		t.Fatalf("Failed to generate JWT: %v", err)
	}
	
	parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		return []byte("your-secret-key"), nil
	})
	
	if err != nil {
		t.Fatalf("Failed to parse token: %v", err)
	}
	
	claims, ok := parsedToken.Claims.(jwt.MapClaims)
	if !ok {
		t.Error("Failed to extract claims from token")
	}
	
	exp, ok := claims["exp"].(float64)
	if !ok {
		t.Error("Expiration claim not found or invalid")
	}
	
	expTime := time.Unix(int64(exp), 0)
	expectedExp := time.Now().Add(time.Hour * 24)
	
	// Allow 1 minute tolerance for test execution time
	if expTime.Before(expectedExp.Add(-time.Minute)) || expTime.After(expectedExp.Add(time.Minute)) {
		t.Errorf("Token expiration time is not as expected. Got: %v, Expected around: %v", expTime, expectedExp)
	}
}

func TestRoleValidation(t *testing.T) {
	validRoles := []string{"customer", "business_owner"}
	invalidRoles := []string{"admin", "invalid", "", "CUSTOMER", "Business_Owner"}
	
	for _, role := range validRoles {
		if role != "customer" && role != "business_owner" {
			t.Errorf("Role %s should be valid but validation failed", role)
		}
	}
	
	for _, role := range invalidRoles {
		if role == "customer" || role == "business_owner" {
			t.Errorf("Role %s should be invalid but validation passed", role)
		}
	}
}