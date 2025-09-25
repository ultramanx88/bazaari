# Design Document

## Overview

ระบบ Hospitality Booking Platform จะเป็นแพลตฟอร์มที่รองรับธุรกิจ hotel, spa, ร้านนวด, healthcare ให้สามารถจัดการสาขา พนักงาน ห้องบริการ ระบบจอง การเงิน และการแจ้งเตือนได้อย่างครบครัน โดยมีหน้าหลักสำหรับลูกค้าที่ทำงานเหมือน food delivery platform

## Architecture

### Frontend Architecture (Next.js App Router)
```
apps/hospitality-app/
├── app/
│   ├── page.tsx (Homepage - Browse businesses)
│   ├── business/
│   │   └── [id]/
│   │       ├── page.tsx (Business details)
│   │       └── book/
│   │           └── page.tsx (Booking flow)
│   ├── dashboard/
│   │   ├── page.tsx (Business owner dashboard)
│   │   ├── branches/
│   │   ├── staff/
│   │   ├── rooms/
│   │   ├── bookings/
│   │   ├── finances/
│   │   └── events/
│   ├── profile/
│   │   └── page.tsx (Customer profile & bookings)
│   └── api/
│       ├── businesses/
│       ├── bookings/
│       ├── payments/
│       ├── notifications/
│       └── reviews/
├── components/
│   ├── ui/ (Shared UI components)
│   ├── business/ (Business-related components)
│   ├── booking/ (Booking flow components)
│   ├── maps/ (Map and location components)
│   └── dashboard/ (Dashboard components)
└── lib/
    ├── api/ (API client functions)
    ├── utils/ (Utility functions)
    └── types/ (TypeScript interfaces)
```

### Backend Architecture (Go + Gin)
```
backend/
├── models/
│   ├── business.go
│   ├── branch.go
│   ├── room.go
│   ├── staff.go
│   ├── booking.go
│   ├── payment.go
│   ├── event.go
│   ├── review.go
│   └── notification.go
├── handlers/
│   ├── business.go
│   ├── booking.go
│   ├── payment.go
│   ├── notification.go
│   └── review.go
├── services/
│   ├── booking_service.go
│   ├── payment_service.go
│   ├── notification_service.go
│   └── map_service.go
└── middleware/
    ├── auth.go
    ├── cors.go
    └── rate_limit.go
```

### Database Schema
```sql
-- Business and Location Management
model Business {
  id          Int      @id @default(autoincrement())
  name        String
  type        BusinessType // HOTEL, SPA, MASSAGE, HEALTHCARE
  description String?
  logo        String?
  rating      Float    @default(0)
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  branches    Branch[]
  reviews     Review[]
  events      Event[]
  userBusinesses UserBusiness[]
}

model Branch {
  id          Int      @id @default(autoincrement())
  businessId  Int
  name        String
  address     String
  phone       String
  latitude    Float
  longitude   Float
  openTime    String
  closeTime   String
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  business    Business @relation(fields: [businessId], references: [id])
  rooms       Room[]
  staff       Staff[]
  bookings    Booking[]
}

-- Room and Service Management
model Room {
  id          Int      @id @default(autoincrement())
  branchId    Int
  name        String
  category    RoomCategory // MASSAGE_ROOM, SPA_ROOM, HOTEL_ROOM, TREATMENT_ROOM, CONSULTATION_ROOM
  capacity    Int
  pricePerHour Float
  amenities   String[] // JSON array of amenities
  photos      String[] // JSON array of photo URLs
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  branch      Branch @relation(fields: [branchId], references: [id])
  bookings    Booking[]
}

-- Staff Management
model Staff {
  id          Int      @id @default(autoincrement())
  branchId    Int
  userId      Int?     // Optional link to User account
  name        String
  role        StaffRole // MANAGER, THERAPIST, RECEPTIONIST, CLEANER
  phone       String
  email       String?
  specialties String[] // JSON array of specialties
  workingHours String  // JSON object with schedule
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  branch      Branch @relation(fields: [branchId], references: [id])
  user        User?  @relation(fields: [userId], references: [id])
  bookings    Booking[]
  reviews     Review[]
}

-- Booking System
model Booking {
  id          Int      @id @default(autoincrement())
  customerId  Int
  branchId    Int
  roomId      Int?
  staffId     Int?
  serviceType String
  startTime   DateTime
  endTime     DateTime
  totalPrice  Float
  status      BookingStatus // PENDING, CONFIRMED, IN_PROGRESS, COMPLETED, CANCELLED
  notes       String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  customer    User   @relation(fields: [customerId], references: [id])
  branch      Branch @relation(fields: [branchId], references: [id])
  room        Room?  @relation(fields: [roomId], references: [id])
  staff       Staff? @relation(fields: [staffId], references: [id])
  payment     Payment?
  reviews     Review[]
}

-- Payment System
model Payment {
  id          Int      @id @default(autoincrement())
  bookingId   Int      @unique
  amount      Float
  method      PaymentMethod // CASH, CARD, DIGITAL_WALLET
  status      PaymentStatus // PENDING, COMPLETED, FAILED, REFUNDED
  transactionId String?
  paidAt      DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  booking     Booking @relation(fields: [bookingId], references: [id])
}

-- Event and Promotion System
model Event {
  id          Int      @id @default(autoincrement())
  businessId  Int
  title       String
  description String
  startDate   DateTime
  endDate     DateTime
  capacity    Int?
  price       Float?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  business    Business @relation(fields: [businessId], references: [id])
  bookings    EventBooking[]
}

model EventBooking {
  id          Int      @id @default(autoincrement())
  eventId     Int
  customerId  Int
  attendees   Int      @default(1)
  totalPrice  Float
  status      BookingStatus
  createdAt   DateTime @default(now())
  
  event       Event @relation(fields: [eventId], references: [id])
  customer    User  @relation(fields: [customerId], references: [id])
}

-- Review System
model Review {
  id          Int      @id @default(autoincrement())
  customerId  Int
  businessId  Int?
  bookingId   Int?
  staffId     Int?
  rating      Int      // 1-5 stars
  comment     String?
  response    String?  // Business owner response
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  customer    User     @relation(fields: [customerId], references: [id])
  business    Business? @relation(fields: [businessId], references: [id])
  booking     Booking? @relation(fields: [bookingId], references: [id])
  staff       Staff?   @relation(fields: [staffId], references: [id])
}

-- Notification System
model Notification {
  id          Int      @id @default(autoincrement())
  userId      Int
  type        NotificationType // BOOKING_CONFIRMATION, REMINDER, CANCELLATION, PROMOTION
  title       String
  message     String
  isRead      Boolean  @default(false)
  scheduledAt DateTime?
  sentAt      DateTime?
  createdAt   DateTime @default(now())
  
  user        User @relation(fields: [userId], references: [id])
}

-- Enums
enum BusinessType {
  HOTEL
  SPA
  MASSAGE
  HEALTHCARE
}

enum RoomCategory {
  MASSAGE_ROOM
  SPA_ROOM
  HOTEL_ROOM
  TREATMENT_ROOM
  CONSULTATION_ROOM
}

enum StaffRole {
  MANAGER
  THERAPIST
  RECEPTIONIST
  CLEANER
}

enum BookingStatus {
  PENDING
  CONFIRMED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

enum PaymentMethod {
  CASH
  CARD
  DIGITAL_WALLET
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

enum NotificationType {
  BOOKING_CONFIRMATION
  REMINDER
  CANCELLATION
  PROMOTION
  SCHEDULE_CHANGE
}
```

## Components and Interfaces

### 1. Homepage (Food Delivery Style)

**Components:**
- `BusinessGrid`: Display businesses in card format with photos, ratings, distance
- `SearchBar`: Search by business name, service type, location
- `FilterPanel`: Filter by business type, rating, distance, price range
- `MapView`: Show businesses on interactive map
- `FeaturedSection`: Highlight promoted businesses and events

### 2. Business Detail Page

**Components:**
- `BusinessHeader`: Business info, photos, rating, contact details
- `ServiceList`: Available services with pricing
- `RoomGallery`: Room photos and details
- `ReviewSection`: Customer reviews and ratings
- `LocationMap`: Branch locations with navigation
- `BookingButton`: CTA for booking (requires login)

### 3. Booking Flow

**Components:**
- `ServiceSelector`: Choose service type and duration
- `DateTimePicker`: Select date and time slots
- `StaffSelector`: Choose preferred staff member (if applicable)
- `RoomSelector`: Choose room/treatment area
- `CustomerForm`: Customer details and special requests
- `PaymentForm`: Payment method selection
- `BookingConfirmation`: Confirmation details and receipt

### 4. Business Dashboard

**Components:**
- `DashboardOverview`: Key metrics and today's bookings
- `BranchManager`: Add/edit branches with map integration
- `StaffManager`: Manage staff schedules and roles
- `RoomManager`: Add/edit rooms with photo upload
- `BookingCalendar`: View and manage all bookings
- `FinancialDashboard`: Revenue tracking and reports
- `EventManager`: Create and manage events/promotions

### 5. Customer Profile

**Components:**
- `BookingHistory`: Past and upcoming bookings
- `FavoriteBusinesses`: Saved businesses for quick access
- `ReviewManager`: Write and manage reviews
- `NotificationSettings`: Manage notification preferences

## Data Models

### Frontend TypeScript Interfaces
```typescript
interface Business {
  id: string
  name: string
  type: 'HOTEL' | 'SPA' | 'MASSAGE' | 'HEALTHCARE'
  description?: string
  logo?: string
  rating: number
  branches: Branch[]
  reviews: Review[]
  events: Event[]
}

interface Branch {
  id: string
  businessId: string
  name: string
  address: string
  phone: string
  latitude: number
  longitude: number
  openTime: string
  closeTime: string
  rooms: Room[]
  staff: Staff[]
}

interface Room {
  id: string
  branchId: string
  name: string
  category: 'MASSAGE_ROOM' | 'SPA_ROOM' | 'HOTEL_ROOM' | 'TREATMENT_ROOM' | 'CONSULTATION_ROOM'
  capacity: number
  pricePerHour: number
  amenities: string[]
  photos: string[]
}

interface Staff {
  id: string
  branchId: string
  name: string
  role: 'MANAGER' | 'THERAPIST' | 'RECEPTIONIST' | 'CLEANER'
  phone: string
  email?: string
  specialties: string[]
  workingHours: WorkingHours
}

interface Booking {
  id: string
  customerId: string
  branchId: string
  roomId?: string
  staffId?: string
  serviceType: string
  startTime: Date
  endTime: Date
  totalPrice: number
  status: 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  notes?: string
}

interface WorkingHours {
  monday: { start: string; end: string; breaks: TimeSlot[] }
  tuesday: { start: string; end: string; breaks: TimeSlot[] }
  wednesday: { start: string; end: string; breaks: TimeSlot[] }
  thursday: { start: string; end: string; breaks: TimeSlot[] }
  friday: { start: string; end: string; breaks: TimeSlot[] }
  saturday: { start: string; end: string; breaks: TimeSlot[] }
  sunday: { start: string; end: string; breaks: TimeSlot[] }
}

interface TimeSlot {
  start: string
  end: string
}
```

## Error Handling

### Frontend Error Handling
1. **Network Errors**: Retry mechanism with exponential backoff
2. **Authentication Errors**: Redirect to login with return URL
3. **Booking Conflicts**: Show alternative time slots
4. **Payment Errors**: Clear error messages with retry options
5. **Location Errors**: Fallback to manual address entry

### Backend Error Handling
1. **Database Errors**: Log errors and return generic messages
2. **Validation Errors**: Return detailed field-specific errors
3. **Booking Conflicts**: Check availability before confirming
4. **Payment Processing**: Handle payment gateway errors gracefully
5. **External API Errors**: Fallback mechanisms for map and notification services

## Testing Strategy

### Frontend Testing
1. **Unit Tests**: Test components with Jest + React Testing Library
2. **Integration Tests**: Test booking flow and payment integration
3. **E2E Tests**: Test complete user journeys with Playwright
4. **Visual Tests**: Screenshot testing for UI consistency

### Backend Testing
1. **Unit Tests**: Test individual handlers and services
2. **Integration Tests**: Test database operations and external APIs
3. **Load Tests**: Test system performance under high booking volume
4. **Security Tests**: Test authentication and authorization

## Security Considerations

1. **Authentication**: JWT tokens with refresh mechanism
2. **Authorization**: Role-based access control for business features
3. **Data Protection**: Encrypt sensitive customer and payment data
4. **API Security**: Rate limiting and input validation
5. **Payment Security**: PCI DSS compliance for payment processing
6. **Location Privacy**: Optional location sharing with user consent

## External Integrations

1. **Map Services**: Google Maps API for location and navigation
2. **Payment Gateways**: Stripe, PayPal for payment processing
3. **SMS/Email**: Twilio, SendGrid for notifications
4. **Push Notifications**: Firebase Cloud Messaging
5. **Analytics**: Google Analytics for business insights
6. **Review Platforms**: Integration with Google Reviews, Facebook Reviews