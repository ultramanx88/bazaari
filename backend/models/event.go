package models

import (
	"time"

	"gorm.io/gorm"
)

type Event struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	BusinessID  uint           `json:"business_id" gorm:"not null"`
	Title       string         `json:"title" gorm:"not null"`
	Description string         `json:"description" gorm:"not null"`
	StartDate   time.Time      `json:"start_date" gorm:"not null"`
	EndDate     time.Time      `json:"end_date" gorm:"not null"`
	Capacity    *int           `json:"capacity"`
	Price       *float64       `json:"price"`
	IsActive    bool           `json:"is_active" gorm:"default:true"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `json:"-" gorm:"index"`

	// Relationships
	Business Business      `json:"business,omitempty" gorm:"foreignKey:BusinessID"`
	Bookings []EventBooking `json:"bookings,omitempty" gorm:"foreignKey:EventID"`
}

type EventBooking struct {
	ID         uint           `json:"id" gorm:"primaryKey"`
	EventID    uint           `json:"event_id" gorm:"not null"`
	CustomerID uint           `json:"customer_id" gorm:"not null"`
	Attendees  int            `json:"attendees" gorm:"default:1"`
	TotalPrice float64        `json:"total_price" gorm:"not null"`
	Status     HBookingStatus `json:"status" gorm:"default:PENDING"`
	CreatedAt  time.Time      `json:"created_at"`

	// Relationships
	Event    Event `json:"event,omitempty" gorm:"foreignKey:EventID"`
	Customer User  `json:"customer,omitempty" gorm:"foreignKey:CustomerID"`
}