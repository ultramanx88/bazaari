package models

import (
	"time"

	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type StaffRole string

const (
	StaffRoleManager      StaffRole = "MANAGER"
	StaffRoleTherapist    StaffRole = "THERAPIST"
	StaffRoleReceptionist StaffRole = "RECEPTIONIST"
	StaffRoleCleaner      StaffRole = "CLEANER"
)

type Staff struct {
	ID           uint           `json:"id" gorm:"primaryKey"`
	BranchID     uint           `json:"branch_id" gorm:"not null"`
	UserID       *uint          `json:"user_id"`
	Name         string         `json:"name" gorm:"not null"`
	Role         StaffRole      `json:"role" gorm:"not null"`
	Phone        string         `json:"phone" gorm:"not null"`
	Email        *string        `json:"email"`
	Specialties  datatypes.JSON `json:"specialties" gorm:"type:jsonb"`
	WorkingHours string         `json:"working_hours" gorm:"not null"`
	IsActive     bool           `json:"is_active" gorm:"default:true"`
	CreatedAt    time.Time      `json:"created_at"`
	UpdatedAt    time.Time      `json:"updated_at"`
	DeletedAt    gorm.DeletedAt `json:"-" gorm:"index"`

	// Relationships
	Branch   Branch     `json:"branch,omitempty" gorm:"foreignKey:BranchID"`
	User     *User      `json:"user,omitempty" gorm:"foreignKey:UserID"`
	Bookings []HBooking `json:"bookings,omitempty" gorm:"foreignKey:StaffID"`
	Reviews  []Review   `json:"reviews,omitempty" gorm:"foreignKey:StaffID"`
}