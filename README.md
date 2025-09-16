# Bazaari Platform

Multi-service platform ที่รวมบริการต่างๆ ไว้ในที่เดียว ใช้ Turborepo สำหรับจัดการ monorepo

## 🚀 Services

1. **Food Delivery** - ส่งอาหาร และร้านอาหาร (เหมือน Grab Food) multivendor
2. **Hotels & Accommodation** - โรงแรม และที่พัก (เหมือน Agoda/Booking.com)
3. **Spa & Massage** - สปาและนวด multivendor (booking system)
4. **Visa Services** - บริการปรึกษาและรับทำวีซ่า
5. **Restaurant Booking** - จองร้านอาหาร multivendor
6. **Healthcare** - คลินิก สถานเวชกรรม multivendor (booking system)
7. **Real Estate** - อสังหาริมทรัพย์ multivendor
8. **Marketplace** - ตลาดออนไลน์ multivendor

## 📱 Applications

### Mobile Apps (Expo)
- **`apps/customer-app`** - แอพสำหรับผู้ใช้ทั่วไป (สั่งอาหาร + ใช้บริการทั้งหมด)
- **`apps/vendor-app`** - แอพสำหรับร้านค้า/กิจการต่างๆ
- **`apps/rider-app`** - แอพสำหรับ rider ขับส่งอาหาร (แยกต่างหาก)

### Web Applications (Next.js)
- **`apps/web-app`** - เว็บไซต์หลักสำหรับผู้ใช้
- **`apps/pos-app`** - ระบบ POS สำหรับกิจการต่างๆ

### Backend
- **`backend`** - Go Fiber + GORM API server

### Packages
- **`packages/shared`** - Shared types, schemas, และ utilities
- **`packages/ui`** - React component library
- **`packages/typescript-config`** - TypeScript configurations

### Database
- **`prisma`** - Prisma schema สำหรับ Vercel Postgres integration
- **Backend GORM** - Go models และ database management

## เทคโนโลยีที่ใช้

### Frontend
- **Next.js 14** - React framework with App Router
- **React Query** - Data fetching และ caching
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management

### Mobile
- **Expo** - React Native development platform
- **Expo Router** - File-based routing

### Backend
- **Go Fiber** - Fast HTTP web framework
- **GORM** - Go ORM library
- **PostgreSQL** - Primary database
- **JWT** - Authentication

### Shared
- **TypeScript** - Type safety
- **Zod** - Schema validation
- **Turborepo** - Monorepo management

## การติดตั้งและรัน

### Prerequisites
- Node.js 18+
- Go 1.21+
- PostgreSQL
- npm หรือ yarn

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd bazaari-monorepo

# Install dependencies
npm install

# Copy environment files
cp .env.example .env
cp backend/.env.example backend/.env

# Setup database
npm run db:generate
npm run db:push
```

### Development

```bash
# Run all applications
npm run dev

# Run specific applications
npm run customer:dev    # Customer mobile app
npm run vendor:dev      # Vendor mobile app  
npm run rider:dev       # Rider mobile app
npm run web:dev         # Web application
npm run pos:dev         # POS application
npm run backend:dev     # Backend API
```

### Build

```bash
# Build all packages
npm run build

# Build specific package
npm run build --filter=@bazaari/web
```

## Database Management

### Prisma (Vercel Integration)
```bash
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Create migration
```

### Go Backend (GORM)
```bash
cd backend
go run main.go  # Auto-migrate on startup
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh` - Refresh token

### Products
- `GET /api/v1/products` - List products
- `GET /api/v1/products/:id` - Get product details
- `POST /api/v1/products` - Create product (protected)
- `PUT /api/v1/products/:id` - Update product (protected)
- `DELETE /api/v1/products/:id` - Delete product (protected)

### Orders
- `GET /api/v1/orders` - List user orders (protected)
- `POST /api/v1/orders` - Create order (protected)
- `GET /api/v1/orders/:id` - Get order details (protected)

## Deployment

### Web (Vercel)
```bash
# Deploy to Vercel
vercel --prod
```

### Mobile (Expo)
```bash
cd apps/mobile
expo build:android  # Android build
expo build:ios      # iOS build
```

### Backend (Docker/Cloud)
```bash
cd backend
go build -o bin/server main.go
./bin/server
```

## การพัฒนา

### เพิ่ม Package ใหม่
```bash
# สร้าง package ใหม่ใน packages/
mkdir packages/new-package
cd packages/new-package
npm init -y
```

### เพิ่ม App ใหม่
```bash
# สร้าง app ใหม่ใน apps/
mkdir apps/new-app
cd apps/new-app
npm init -y
```

### Shared Types
ใช้ `@bazaari/shared` สำหรับ types, schemas, และ utilities ที่ใช้ร่วมกัน

```typescript
import { User, Product, LoginSchema } from '@bazaari/shared';
```

## Scripts

- `npm run dev` - Start all development servers
- `npm run build` - Build all packages
- `npm run lint` - Lint all packages
- `npm run format` - Format code with Prettier
- `npm run check-types` - Type check all packages

## Environment Variables

ดู `.env.example` สำหรับตัวแปรสภาพแวดล้อมที่จำเป็น

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request