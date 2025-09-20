# Deployment Guide - Bazaari Platform

## Deploy to Vercel

### 1. Prerequisites
- GitHub repository pushed
- Vercel account connected to GitHub
- Database credentials ready

### 2. Environment Variables Setup

In Vercel Dashboard, add these environment variables:

```env
# Database
DATABASE_URL=postgres://97d6a9884cd1cc5f029124862fa264969acee2f90a8c1bd870f87e3675ed7f43:sk_13_FDI45eU9c2IJxnh4hf@db.prisma.io:5432/postgres?sslmode=require

# API
NEXT_PUBLIC_API_URL=https://your-api-domain.com

# Auth
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Optimizations
NEXT_TELEMETRY_DISABLED=1
```

### 3. Vercel Configuration

The `vercel.json` file is already configured with:
- Build settings for monorepo
- Environment variable mapping
- Route configuration

### 4. Deploy Steps

#### Option A: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: GitHub Integration
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `apps/web`
4. Add environment variables
5. Deploy

### 5. Build Configuration

**Root Directory:** `apps/web`
**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`

### 6. Common Issues & Solutions

#### Issue: "Module not found" errors
**Solution:** Make sure all dependencies are in `apps/web/package.json`

#### Issue: Database connection fails
**Solution:** 
- Verify DATABASE_URL in Vercel environment variables
- Ensure database allows connections from Vercel IPs
- Check SSL requirements

#### Issue: Build fails on Prisma
**Solution:**
- Ensure `prisma generate` runs before build
- Add `@prisma/client` to dependencies (not devDependencies)

#### Issue: Monorepo build issues
**Solution:**
- Set correct root directory in Vercel: `apps/web`
- Use the provided `vercel.json` configuration

### 7. Performance Optimizations

Already configured:
- ✅ Next.js Turbo mode
- ✅ SWC minification
- ✅ Image optimization
- ✅ Font optimization (Inter)
- ✅ CSS optimization

### 8. Post-Deployment

1. **Test the deployment:**
   - Check all pages load correctly
   - Verify database connections
   - Test API endpoints

2. **Monitor performance:**
   - Use Vercel Analytics
   - Check Core Web Vitals
   - Monitor error rates

3. **Set up custom domain (optional):**
   - Add domain in Vercel dashboard
   - Configure DNS records

### 9. Troubleshooting Commands

```bash
# Check build locally
cd apps/web && npm run build

# Test production build locally
npm run start

# Check Prisma connection
npm run db:studio

# Generate Prisma client
npm run db:generate
```

### 10. Environment-Specific Notes

**Development:** Uses `.env.local`
**Production:** Uses Vercel environment variables
**Database:** Prisma Cloud (same for both environments)