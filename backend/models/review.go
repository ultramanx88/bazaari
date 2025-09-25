package models

import (
	"time"

	"gorm.io/gorm"
)

type Review struct {
	ID         uint           `json:"id" gorm:"primaryKey"`
	CustomerID uint           `json:"customer_id" gorm:"not null"`
	BusinessID *uint          `json:"business_id"`
	BookingID  *uint          `json:"booking_id"`
	StaffID    *uint          `json:"staff_id"`
	Rating     int            `json:"rating" gorm:"not null;check:rating >= 1 AND rating <= 5"`
	Comment    *string        `json:"comment"`
	Response   *string        `json:"response"`
	CreatedAt  time.Time      `json:"created_at"`
	UpdatedAt  time.Time      `json:"updated_at"`
	DeletedAt  gorm.DeletedAt `json:"-" gorm:"index"`

	// Relationships
	Customer User      `json:"customer,omitempty" gorm:"foreignKey:CustomerID"`
	Business *Business `json:"business,omitempty" gorm:"foreignKey:BusinessID"`
	Booking  *HBooking `json:"booking,omitempty" gorm:"foreignKey:BookingID"`
	Staff    *Staff    `json:"staff,omitempty" gorm:"foreignKey:StaffID"`
}