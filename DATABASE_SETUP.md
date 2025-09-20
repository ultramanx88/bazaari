# Database Setup - Bazaari Platform

## Prisma Cloud Database Configuration

**Database:** Prisma Cloud PostgreSQL with Accelerate

### Quick Start with Prisma Cloud

1. **Generate Prisma Client:**
```bash
cd apps/web
npm run db:generate
```

2. **Push Database Schema:**
```bash
npm run db:push
```

3. **Open Prisma Studio:**
```bash
npm run db:studio
```

### Database Connection Details

- **Provider:** Prisma Cloud PostgreSQL
- **Connection Pooling:** Enabled via Prisma Accelerate
- **SSL:** Required
- **Region:** Auto-selected for optimal performance

### Environment Variables

Your `.env.local` contains:
```env
# Prisma Cloud Configuration
POSTGRES_URL="postgres://97d6a9884cd1cc5f029124862fa264969acee2f90a8c1bd870f87e3675ed7f43:sk_13_FDI45eU9c2IJxnh4hf@db.prisma.io:5432/postgres?sslmode=require"
PRISMA_DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=..."
DATABASE_URL="postgres://97d6a9884cd1cc5f029124862fa264969acee2f90a8c1bd870f87e3675ed7f43:sk_13_FDI45eU9c2IJxnh4hf@db.prisma.io:5432/postgres?sslmode=require"
```

### Prisma Schema Configuration

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("POSTGRES_URL") // uses connection pooling
  directUrl = env("DATABASE_URL") // uses a direct connection
}
```

### Available Scripts

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Run database migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

### Benefits of Prisma Cloud

- ✅ **No Setup Required:** Database is ready to use
- ✅ **Connection Pooling:** Automatic via Prisma Accelerate
- ✅ **Global Edge Caching:** Faster queries worldwide
- ✅ **Auto Scaling:** Handles traffic spikes automatically
- ✅ **SSL Security:** Encrypted connections by default
- ✅ **Backup & Recovery:** Managed automatically

### Troubleshooting

- Verify environment variables are set correctly
- Check internet connection for cloud database access
- Ensure API keys are valid and not expired
- Use `npm run db:studio` to test connection
- Check Prisma Cloud dashboard for database status

### Local Development Alternative

If you need local development, you can still use Docker:
```bash
# Use local PostgreSQL for development
docker-compose up -d postgres

# Switch DATABASE_URL to local in .env.local
DATABASE_URL="postgresql://bazaari_user:bazaari_password@localhost:5432/prisma-postgres-bazaari"
```