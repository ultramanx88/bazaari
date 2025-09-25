package models

import (
	"time"

	"gorm.io/gorm"
)

type PaymentMethod string

const (
	PaymentMethodCash          PaymentMethod = "CASH"
	PaymentMethodCard          PaymentMethod = "CARD"
	PaymentMethodDigitalWallet PaymentMethod = "DIGITAL_WALLET"
)

type PaymentStatus string

const (
	PaymentStatusPending   PaymentStatus = "PENDING"
	PaymentStatusCompleted PaymentStatus = "COMPLETED"
	PaymentStatusFailed    PaymentStatus = "FAILED"
	PaymentStatusRefunded  PaymentStatus = "REFUNDED"
)

type Payment struct {
	ID            uint           `json:"id" gorm:"primaryKey"`
	BookingID     uint           `json:"booking_id" gorm:"not null;unique"`
	Amount        float64        `json:"amount" gorm:"not null"`
	Method        PaymentMethod  `json:"method" gorm:"not null"`
	Status        PaymentStatus  `json:"status" gorm:"default:PENDING"`
	TransactionID *string        `json:"transaction_id"`
	PaidAt        *time.Time     `json:"paid_at"`
	CreatedAt     time.Time      `json:"created_at"`
	UpdatedAt     time.Time      `json:"updated_at"`
	DeletedAt     gorm.DeletedAt `json:"-" gorm:"index"`

	// Relationships
	Booking HBooking `json:"booking,omitempty" gorm:"foreignKey:BookingID"`
}