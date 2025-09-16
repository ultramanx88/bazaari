package models

import (
	"time"

	"gorm.io/gorm"
)

// ServiceType represents different service categories
type ServiceType string

const (
	ServiceFood       ServiceType = "food"
	ServiceHotel      ServiceType = "hotel"
	ServiceSpa        ServiceType = "spa"
	ServiceVisa       ServiceType = "visa"
	ServiceRestaurant ServiceType = "restaurant"
	ServiceHealthcare ServiceType = "healthcare"
	ServiceRealEstate ServiceType = "realestate"
	ServiceMarketplace ServiceType = "marketplace"
)

// Service represents a service category
type Service struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	Name        string         `json:"name" gorm:"not null"`
	Type        ServiceType    `json:"type" gorm:"not null"`
	Description string         `json:"description"`
	Icon        string         `json:"icon"`
	Color       string         `json:"color"`
	IsActive    bool           `json:"is_active" gorm:"default:true"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `json:"-" gorm:"index"`
}

// Vendor represents a business/vendor in the platform
type Vendor struct {
	ID            uint           `json:"id" gorm:"primaryKey"`
	UserID        uint           `json:"user_id" gorm:"not null"`
	User          User           `json:"user" gorm:"foreignKey:UserID"`
	BusinessName  string         `json:"business_name" gorm:"not null"`
	BusinessType  ServiceType    `json:"business_type" gorm:"not null"`
	Description   string         `json:"description"`
	Address       string         `json:"address"`
	Phone         string         `json:"phone"`
	Email         string         `json:"email"`
	Website       string         `json:"website"`
	Logo          string         `json:"logo"`
	Images        []string       `json:"images" gorm:"type:text[]"`
	Rating        float64        `json:"rating" gorm:"default:0"`
	ReviewCount   int            `json:"review_count" gorm:"default:0"`
	IsVerified    bool           `json:"is_verified" gorm:"default:false"`
	IsActive      bool           `json:"is_active" gorm:"default:true"`
	OpeningHours  string         `json:"opening_hours" gorm:"type:jsonb"`
	Location      string         `json:"location" gorm:"type:point"`
	CreatedAt     time.Time      `json:"created_at"`
	UpdatedAt     time.Time      `json:"updated_at"`
	DeletedAt     gorm.DeletedAt `json:"-" gorm:"index"`
}

// ServiceItem represents items/services offered by vendors
type ServiceItem struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	VendorID    uint           `json:"vendor_id" gorm:"not null"`
	Vendor      Vendor         `json:"vendor" gorm:"foreignKey:VendorID"`
	Name        string         `json:"name" gorm:"not null"`
	Description string         `json:"description"`
	Price       float64        `json:"price" gorm:"not null"`
	Duration    int            `json:"duration"` // in minutes for bookable services
	Images      []string       `json:"images" gorm:"type:text[]"`
	Category    string         `json:"category"`
	IsAvailable bool           `json:"is_available" gorm:"default:true"`
	IsActive    bool           `json:"is_active" gorm:"default:true"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `json:"-" gorm:"index"`
}