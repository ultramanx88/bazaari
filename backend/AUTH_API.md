# Authentication API Documentation

## Overview
This document describes the authentication and user management endpoints for the Hospitality Booking Platform.

## Base URL
```
http://localhost:8080/api/v1
```

## Authentication Endpoints

### 1. Register User
**POST** `/auth/register`

Register a new user (customer or business owner).

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890",
  "role": "customer" // or "business_owner"
}
```

**Response (201):**
```json
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "role": "customer",
    "is_active": true,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Login
**POST** `/auth/login`

Authenticate user and get access token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "role": "customer",
    "is_active": true,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
}
```

### 3. Refresh Token
**POST** `/auth/refresh`

Get a new access token using current valid token.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "role": "customer",
    "is_active": true
  }
}
```

### 4. Logout
**POST** `/auth/logout`

Logout user (client-side token removal).

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "Logged out successfully"
}
```

### 5. Verify Token
**GET** `/auth/verify`

Verify if current token is valid.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "valid": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

## User Management Endpoints

### 1. Get Profile
**GET** `/users/profile`

Get current user profile.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "role": "customer",
  "is_active": true,
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

### 2. Update Profile
**PUT** `/users/profile`

Update user profile information.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "John Smith",
  "phone": "0987654321"
}
```

**Response (200):**
```json
{
  "id": 1,
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "0987654321",
  "role": "customer",
  "is_active": true,
  "updated_at": "2024-01-01T01:00:00Z"
}
```

### 3. Change Password
**POST** `/users/change-password`

Change user password.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "current_password": "oldpassword123",
  "new_password": "newpassword123"
}
```

**Response (200):**
```json
{
  "message": "Password updated successfully"
}
```

### 4. Get User Businesses (Business Owners Only)
**GET** `/users/businesses`

Get businesses owned by the current user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
[
  {
    "id": 1,
    "user_id": 1,
    "business_id": 1,
    "role": "owner",
    "business": {
      "id": 1,
      "name": "Relaxing Spa",
      "type": "SPA",
      "description": "A peaceful spa experience",
      "rating": 4.5,
      "is_active": true
    }
  }
]
```

### 5. Deactivate Account
**POST** `/users/deactivate`

Deactivate user account.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "Account deactivated successfully"
}
```

## Business Owner Routes

### Business Management
**GET** `/business-owner/businesses`

Get all businesses for the authenticated business owner.

**Headers:**
```
Authorization: Bearer <token>
```

**Note:** User must have role "business_owner"

## Role-Based Access Control

### Roles
- `customer`: Regular customers who can book services
- `business_owner`: Users who can manage businesses, branches, staff, and bookings

### Middleware
- `AuthMiddleware`: Validates JWT token and sets user in context
- `RequireRole(roles...)`: Ensures user has one of the specified roles
- `RequireBusinessOwner`: Ensures user owns/manages the specified business
- `OptionalAuth`: Sets user in context if token provided, but doesn't require authentication

## Error Responses

### 400 Bad Request
```json
{
  "error": "Invalid request body"
}
```

### 401 Unauthorized
```json
{
  "error": "Authorization header required"
}
```

### 403 Forbidden
```json
{
  "error": "Insufficient permissions"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

## JWT Token Structure

The JWT token contains the following claims:
- `user_id`: User ID
- `role`: User role (customer/business_owner)
- `exp`: Expiration time (24 hours from issue)
- `iat`: Issued at time

## Security Features

1. **Password Hashing**: Uses bcrypt for secure password storage
2. **JWT Tokens**: Stateless authentication with 24-hour expiration
3. **Role-Based Access**: Different permissions for customers vs business owners
4. **Account Deactivation**: Soft delete functionality
5. **Input Validation**: Request body validation and sanitization
6. **Active User Check**: Middleware verifies user account is still active

## Testing

Run the authentication tests:
```bash
cd backend
go test ./handlers -v
```

The tests cover:
- JWT token generation and validation
- Token expiration handling
- Role validation logic