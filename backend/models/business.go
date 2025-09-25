package models

import (
	"time"

	"gorm.io/gorm"
)

type BusinessType string

const (
	BusinessTypeHotel      BusinessType = "HOTEL"
	BusinessTypeSpa        BusinessType = "SPA"
	BusinessTypeMassage    BusinessType = "MASSAGE"
	BusinessTypeHealthcare BusinessType = "HEALTHCARE"
)

type Business struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	Name        string         `json:"name" gorm:"not null"`
	Type        BusinessType   `json:"type" gorm:"not null"`
	Description *string        `json:"description"`
	Logo        *string        `json:"logo"`
	Rating      float64        `json:"rating" gorm:"default:0"`
	IsActive    bool           `json:"is_active" gorm:"default:true"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `json:"-" gorm:"index"`

	// Relationships
	Branches       []Branch       `json:"branches,omitempty" gorm:"foreignKey:BusinessID"`
	Reviews        []Review       `json:"reviews,omitempty" gorm:"foreignKey:BusinessID"`
	Events         []Event        `json:"events,omitempty" gorm:"foreignKey:BusinessID"`
	UserBusinesses []UserBusiness `json:"user_businesses,omitempty" gorm:"foreignKey:BusinessID"`
}

type UserBusiness struct {
	ID         uint   `json:"id" gorm:"primaryKey"`
	UserID     uint   `json:"user_id" gorm:"not null"`
	BusinessID uint   `json:"business_id" gorm:"not null"`
	Role       string `json:"role" gorm:"default:owner"`

	// Relationships
	User     User     `json:"user,omitempty" gorm:"foreignKey:UserID"`
	Business Business `json:"business,omitempty" gorm:"foreignKey:BusinessID"`
}