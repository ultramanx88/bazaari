package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	ID        uint           `json:"id" gorm:"primaryKey"`
	Email     string         `json:"email" gorm:"unique;not null"`
	Password  string         `json:"-" gorm:"not null"`
	Name      string         `json:"name" gorm:"not null"`
	Phone     string         `json:"phone"`
	Role      string         `json:"role" gorm:"default:customer"`
	IsActive  bool           `json:"is_active" gorm:"default:true"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"-" gorm:"index"`

	// Existing relationships
	Orders []Order `json:"orders,omitempty" gorm:"foreignKey:UserID"`

	// Hospitality booking relationships
	UserBusinesses []UserBusiness `json:"user_businesses,omitempty" gorm:"foreignKey:UserID"`
	Staff          []Staff        `json:"staff,omitempty" gorm:"foreignKey:UserID"`
	Bookings       []HBooking     `json:"bookings,omitempty" gorm:"foreignKey:CustomerID"`
	EventBookings  []EventBooking `json:"event_bookings,omitempty" gorm:"foreignKey:CustomerID"`
	Reviews        []Review       `json:"reviews,omitempty" gorm:"foreignKey:CustomerID"`
	Notifications  []Notification `json:"notifications,omitempty" gorm:"foreignKey:UserID"`
}