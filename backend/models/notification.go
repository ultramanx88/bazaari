package models

import (
	"time"

	"gorm.io/gorm"
)

type NotificationType string

const (
	NotificationTypeBookingConfirmation NotificationType = "BOOKING_CONFIRMATION"
	NotificationTypeReminder            NotificationType = "REMINDER"
	NotificationTypeCancellation        NotificationType = "CANCELLATION"
	NotificationTypePromotion           NotificationType = "PROMOTION"
	NotificationTypeScheduleChange      NotificationType = "SCHEDULE_CHANGE"
)

type Notification struct {
	ID          uint             `json:"id" gorm:"primaryKey"`
	UserID      uint             `json:"user_id" gorm:"not null"`
	Type        NotificationType `json:"type" gorm:"not null"`
	Title       string           `json:"title" gorm:"not null"`
	Message     string           `json:"message" gorm:"not null"`
	IsRead      bool             `json:"is_read" gorm:"default:false"`
	ScheduledAt *time.Time       `json:"scheduled_at"`
	SentAt      *time.Time       `json:"sent_at"`
	CreatedAt   time.Time        `json:"created_at"`
	DeletedAt   gorm.DeletedAt   `json:"-" gorm:"index"`

	// Relationships
	User User `json:"user,omitempty" gorm:"foreignKey:UserID"`
}