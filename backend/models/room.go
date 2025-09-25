package models

import (
	"time"

	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type RoomCategory string

const (
	RoomCategoryMassageRoom    RoomCategory = "MASSAGE_ROOM"
	RoomCategorySpaRoom        RoomCategory = "SPA_ROOM"
	RoomCategoryHotelRoom      RoomCategory = "HOTEL_ROOM"
	RoomCategoryTreatmentRoom  RoomCategory = "TREATMENT_ROOM"
	RoomCategoryConsultationRoom RoomCategory = "CONSULTATION_ROOM"
)

type Room struct {
	ID           uint           `json:"id" gorm:"primaryKey"`
	BranchID     uint           `json:"branch_id" gorm:"not null"`
	Name         string         `json:"name" gorm:"not null"`
	Category     RoomCategory   `json:"category" gorm:"not null"`
	Capacity     int            `json:"capacity" gorm:"not null"`
	PricePerHour float64        `json:"price_per_hour" gorm:"not null"`
	Amenities    datatypes.JSON `json:"amenities" gorm:"type:jsonb"`
	Photos       datatypes.JSON `json:"photos" gorm:"type:jsonb"`
	IsActive     bool           `json:"is_active" gorm:"default:true"`
	CreatedAt    time.Time      `json:"created_at"`
	UpdatedAt    time.Time      `json:"updated_at"`
	DeletedAt    gorm.DeletedAt `json:"-" gorm:"index"`

	// Relationships
	Branch   Branch     `json:"branch,omitempty" gorm:"foreignKey:BranchID"`
	Bookings []HBooking `json:"bookings,omitempty" gorm:"foreignKey:RoomID"`
}