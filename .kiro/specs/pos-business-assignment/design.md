# Design Document

## Overview

ระบบ POS Business Assignment จะขยายระบบ Bazaari ที่มีอยู่ให้รองรับการจัดการหลายธุรกิจและหลายสาขา โดยจะเพิ่ม Business และ Branch models ใน backend และสร้าง POS interface ที่สมบูรณ์ใน frontend

## Architecture

### Frontend Architecture (Next.js App Router)
```
apps/pos-app/
├── app/
│   ├── page.tsx (Business Selection - ปรับปรุงจากที่มีอยู่)
│   ├── pos/
│   │   ├── page.tsx (Main POS Interface)
│   │   ├── components/
│   │   │   ├── ProductCatalog.tsx
│   │   │   ├── Cart.tsx
│   │   │   ├── BusinessInfo.tsx
│   │   │   └── PaymentModal.tsx
│   │   └── layout.tsx
│   └── api/
│       ├── businesses/
│       │   └── route.ts
│       └── user-businesses/
│           └── route.ts
```

### Backend Architecture (Go + GORM)
```
backend/
├── models/
│   ├── business.go (ใหม่)
│   └── branch.go (ใหม่)
├── handlers/
│   └── business.go (ใหม่)
└── routes/
    └── business.go (ใหม่)
```

### Database Schema Extensions
```sql
-- เพิ่มใน Prisma schema
model Business {
  id          Int      @id @default(autoincrement())
  name        String
  type        String   // restaurant, spa, hotel, retail
  description String?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  branches    Branch[]
  userBusinesses UserBusiness[]
}

model Branch {
  id         Int      @id @default(autoincrement())
  businessId Int
  name       String
  address    String
  phone      String?
  isActive   Boolean  @default(true)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  
  business   Business @relation(fields: [businessId], references: [id])
  orders     Order[]  // เชื่อมโยงกับ orders
}

model UserBusiness {
  id         Int      @id @default(autoincrement())
  userId     Int
  businessId Int
  role       String   @default("staff") // owner, manager, staff
  createdAt  DateTime @default(now())
  
  user       User     @relation(fields: [userId], references: [id])
  business   Business @relation(fields: [businessId], references: [id])
  
  @@unique([userId, businessId])
}
```

## Components and Interfaces

### 1. Business Selection Interface (ปรับปรุงจากที่มีอยู่)

**Components:**
- `BusinessCard`: แสดงข้อมูลธุรกิจพร้อม icon ตาม type
- `BranchCard`: แสดงข้อมูลสาขา
- `LoadingSpinner`: แสดงสถานะ loading
- `ErrorMessage`: แสดงข้อความ error พร้อม retry button

**API Integration:**
```typescript
interface BusinessAPI {
  getUserBusinesses(): Promise<Business[]>
  getBusinessBranches(businessId: string): Promise<Branch[]>
}
```

### 2. POS Interface (ใหม่)

**Main Components:**
- `POSLayout`: Layout หลักของ POS system
- `BusinessInfo`: แสดงข้อมูลธุรกิจและสาขาที่เลือก
- `ProductCatalog`: แสดงรายการสินค้า/บริการ
- `Cart`: ตะกร้าสินค้าและการคำนวณราคา
- `PaymentModal`: หน้าจอชำระเงิน

**State Management:**
```typescript
interface POSState {
  selectedBusiness: Business | null
  selectedBranch: Branch | null
  cart: CartItem[]
  products: Product[]
  currentOrder: Order | null
}
```

### 3. Backend API Endpoints

**Business Management:**
```go
// GET /api/businesses/user/{userId}
func GetUserBusinesses(c *gin.Context)

// GET /api/businesses/{businessId}/branches
func GetBusinessBranches(c *gin.Context)

// POST /api/businesses
func CreateBusiness(c *gin.Context)

// PUT /api/businesses/{businessId}
func UpdateBusiness(c *gin.Context)
```

## Data Models

### Frontend TypeScript Interfaces
```typescript
interface Business {
  id: string
  name: string
  type: 'restaurant' | 'spa' | 'hotel' | 'retail'
  description?: string
  isActive: boolean
  branches: Branch[]
}

interface Branch {
  id: string
  businessId: string
  name: string
  address: string
  phone?: string
  isActive: boolean
}

interface UserBusiness {
  userId: string
  businessId: string
  role: 'owner' | 'manager' | 'staff'
}

interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
  total: number
}
```

### Backend Go Structs
```go
type Business struct {
    ID          uint      `json:"id" gorm:"primaryKey"`
    Name        string    `json:"name" gorm:"not null"`
    Type        string    `json:"type" gorm:"not null"`
    Description string    `json:"description"`
    IsActive    bool      `json:"is_active" gorm:"default:true"`
    CreatedAt   time.Time `json:"created_at"`
    UpdatedAt   time.Time `json:"updated_at"`
    
    Branches       []Branch       `json:"branches" gorm:"foreignKey:BusinessID"`
    UserBusinesses []UserBusiness `json:"user_businesses" gorm:"foreignKey:BusinessID"`
}

type Branch struct {
    ID         uint      `json:"id" gorm:"primaryKey"`
    BusinessID uint      `json:"business_id" gorm:"not null"`
    Name       string    `json:"name" gorm:"not null"`
    Address    string    `json:"address" gorm:"not null"`
    Phone      string    `json:"phone"`
    IsActive   bool      `json:"is_active" gorm:"default:true"`
    CreatedAt  time.Time `json:"created_at"`
    UpdatedAt  time.Time `json:"updated_at"`
    
    Business Business `json:"business" gorm:"foreignKey:BusinessID"`
}
```

## Error Handling

### Frontend Error Handling
1. **Network Errors**: Retry mechanism พร้อม exponential backoff
2. **Authentication Errors**: Redirect ไป login page
3. **Authorization Errors**: แสดงข้อความว่าไม่มีสิทธิ์เข้าถึง
4. **Validation Errors**: แสดง field-specific error messages

### Backend Error Handling
1. **Database Errors**: Log และส่ง generic error message
2. **Validation Errors**: ส่ง detailed validation messages
3. **Authorization Errors**: ส่ง 403 Forbidden
4. **Not Found Errors**: ส่ง 404 พร้อมข้อความที่เหมาะสม

## Testing Strategy

### Frontend Testing
1. **Unit Tests**: Test individual components ด้วย Jest + React Testing Library
2. **Integration Tests**: Test API integration และ state management
3. **E2E Tests**: Test complete user flows ด้วย Playwright

### Backend Testing
1. **Unit Tests**: Test individual handlers และ models
2. **Integration Tests**: Test database operations
3. **API Tests**: Test HTTP endpoints ด้วย test database

### Test Scenarios
1. **Happy Path**: เลือกธุรกิจ → เลือกสาขา → เข้า POS → ทำรายการ
2. **Error Cases**: Network failure, invalid selections, unauthorized access
3. **Edge Cases**: Single branch business, no businesses assigned
4. **Performance**: Large number of businesses/branches

## Security Considerations

1. **Authentication**: ตรวจสอบ JWT token ในทุก API call
2. **Authorization**: ตรวจสอบสิทธิ์เข้าถึงธุรกิจผ่าน UserBusiness table
3. **Data Validation**: Validate input ทั้ง frontend และ backend
4. **Session Management**: ใช้ secure storage สำหรับ business/branch selection
5. **CORS**: กำหนด allowed origins อย่างเหมาะสม