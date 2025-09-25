package models

import (
	"time"

	"gorm.io/gorm"
)

type HBookingStatus string

const (
	HBookingStatusPending    HBookingStatus = "PENDING"
	HBookingStatusConfirmed  HBookingStatus = "CONFIRMED"
	HBookingStatusInProgress HBookingStatus = "IN_PROGRESS"
	HBookingStatusCompleted  HBookingStatus = "COMPLETED"
	HBookingStatusCancelled  HBookingStatus = "CANCELLED"
)

type HBooking struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	CustomerID  uint           `json:"customer_id" gorm:"not null"`
	BranchID    uint           `json:"branch_id" gorm:"not null"`
	RoomID      *uint          `json:"room_id"`
	StaffID     *uint          `json:"staff_id"`
	ServiceType string         `json:"service_type" gorm:"not null"`
	StartTime   time.Time      `json:"start_time" gorm:"not null"`
	EndTime     time.Time      `json:"end_time" gorm:"not null"`
	TotalPrice  float64        `json:"total_price" gorm:"not null"`
	Status      HBookingStatus `json:"status" gorm:"default:PENDING"`
	Notes       *string        `json:"notes"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `json:"-" gorm:"index"`

	// Relationships
	Customer User      `json:"customer,omitempty" gorm:"foreignKey:CustomerID"`
	Branch   Branch    `json:"branch,omitempty" gorm:"foreignKey:BranchID"`
	Room     *Room     `json:"room,omitempty" gorm:"foreignKey:RoomID"`
	Staff    *Staff    `json:"staff,omitempty" gorm:"foreignKey:StaffID"`
	Payment  *Payment  `json:"payment,omitempty" gorm:"foreignKey:BookingID"`
	Reviews  []Review  `json:"reviews,omitempty" gorm:"foreignKey:BookingID"`
}