package models

import (
	"time"

	"gorm.io/gorm"
)

type Branch struct {
	ID         uint           `json:"id" gorm:"primaryKey"`
	BusinessID uint           `json:"business_id" gorm:"not null"`
	Name       string         `json:"name" gorm:"not null"`
	Address    string         `json:"address" gorm:"not null"`
	Phone      string         `json:"phone" gorm:"not null"`
	Latitude   float64        `json:"latitude" gorm:"not null"`
	Longitude  float64        `json:"longitude" gorm:"not null"`
	OpenTime   string         `json:"open_time" gorm:"not null"`
	CloseTime  string         `json:"close_time" gorm:"not null"`
	IsActive   bool           `json:"is_active" gorm:"default:true"`
	CreatedAt  time.Time      `json:"created_at"`
	UpdatedAt  time.Time      `json:"updated_at"`
	DeletedAt  gorm.DeletedAt `json:"-" gorm:"index"`

	// Relationships
	Business Business         `json:"business,omitempty" gorm:"foreignKey:BusinessID"`
	Rooms    []Room           `json:"rooms,omitempty" gorm:"foreignKey:BranchID"`
	Staff    []Staff          `json:"staff,omitempty" gorm:"foreignKey:BranchID"`
	Bookings []HBooking       `json:"bookings,omitempty" gorm:"foreignKey:BranchID"`
}