package models

import (
	"time"

	"gorm.io/gorm"
)

// BookingStatus represents the status of a booking
type BookingStatus string

const (
	BookingPending   BookingStatus = "pending"
	BookingConfirmed BookingStatus = "confirmed"
	BookingCancelled BookingStatus = "cancelled"
	BookingCompleted BookingStatus = "completed"
)

// Booking represents a booking for services like hotels, spa, restaurants, healthcare
type Booking struct {
	ID            uint           `json:"id" gorm:"primaryKey"`
	UserID        uint           `json:"user_id" gorm:"not null"`
	User          User           `json:"user" gorm:"foreignKey:UserID"`
	VendorID      uint           `json:"vendor_id" gorm:"not null"`
	Vendor        Vendor         `json:"vendor" gorm:"foreignKey:VendorID"`
	ServiceItemID uint           `json:"service_item_id" gorm:"not null"`
	ServiceItem   ServiceItem    `json:"service_item" gorm:"foreignKey:ServiceItemID"`
	BookingDate   time.Time      `json:"booking_date" gorm:"not null"`
	StartTime     time.Time      `json:"start_time"`
	EndTime       time.Time      `json:"end_time"`
	Guests        int            `json:"guests" gorm:"default:1"`
	TotalPrice    float64        `json:"total_price" gorm:"not null"`
	Status        BookingStatus  `json:"status" gorm:"default:pending"`
	Notes         string         `json:"notes"`
	CreatedAt     time.Time      `json:"created_at"`
	UpdatedAt     time.Time      `json:"updated_at"`
	DeletedAt     gorm.DeletedAt `json:"-" gorm:"index"`
}

// DeliveryOrder represents food delivery orders
type DeliveryOrder struct {
	ID              uint           `json:"id" gorm:"primaryKey"`
	UserID          uint           `json:"user_id" gorm:"not null"`
	User            User           `json:"user" gorm:"foreignKey:UserID"`
	VendorID        uint           `json:"vendor_id" gorm:"not null"`
	Vendor          Vendor         `json:"vendor" gorm:"foreignKey:VendorID"`
	RiderID         *uint          `json:"rider_id"`
	Rider           *User          `json:"rider" gorm:"foreignKey:RiderID"`
	Items           []OrderItem    `json:"items" gorm:"foreignKey:OrderID"`
	DeliveryAddress string         `json:"delivery_address" gorm:"not null"`
	DeliveryFee     float64        `json:"delivery_fee" gorm:"default:0"`
	Total           float64        `json:"total" gorm:"not null"`
	Status          string         `json:"status" gorm:"default:pending"`
	EstimatedTime   int            `json:"estimated_time"` // in minutes
	CreatedAt       time.Time      `json:"created_at"`
	UpdatedAt       time.Time      `json:"updated_at"`
	DeletedAt       gorm.DeletedAt `json:"-" gorm:"index"`
}

// Rider represents delivery riders
type Rider struct {
	ID           uint           `json:"id" gorm:"primaryKey"`
	UserID       uint           `json:"user_id" gorm:"not null"`
	User         User           `json:"user" gorm:"foreignKey:UserID"`
	VehicleType  string         `json:"vehicle_type" gorm:"not null"`
	LicenseNo    string         `json:"license_no"`
	IsAvailable  bool           `json:"is_available" gorm:"default:true"`
	IsVerified   bool           `json:"is_verified" gorm:"default:false"`
	Rating       float64        `json:"rating" gorm:"default:0"`
	TotalOrders  int            `json:"total_orders" gorm:"default:0"`
	CurrentLat   float64        `json:"current_lat"`
	CurrentLng   float64        `json:"current_lng"`
	CreatedAt    time.Time      `json:"created_at"`
	UpdatedAt    time.Time      `json:"updated_at"`
	DeletedAt    gorm.DeletedAt `json:"-" gorm:"index"`
}