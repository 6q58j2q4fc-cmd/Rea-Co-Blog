# Render Hosting Migration Guide

This document outlines the steps to migrate the Rea Co Homes website from Manus hosting to Render hosting.

## Overview

**Current Setup (Manus):**
- Manus OAuth authentication
- Manus-managed MySQL database
- Manus-managed S3 file storage
- Manus-managed email service

**Target Setup (Render):**
- Email/password authentication with JWT
- PostgreSQL database (Render-managed)
- AWS S3 file storage (production) + Manus S3 (backup)
- Resend email service
- Custom domain: bendoregonluxuryhomebuilder.com

## Prerequisites

1. **Render Account** — Create account at https://render.com
2. **AWS Account** — For S3 storage (if not already set up)
3. **PostgreSQL** — Render provides managed PostgreSQL
4. **Resend Account** — For email service (https://resend.com)
5. **GitHub Repository** — Code must be in GitHub for Render deployment

## Migration Steps

### Phase 1: Database Migration

#### 1.1 Export Manus Database

```bash
# Connect to Manus database and export schema + data
mysqldump -h [manus-host] -u [username] -p [database] > manus_backup.sql
```

#### 1.2 Create PostgreSQL Database on Render

1. Go to Render Dashboard → Databases → Create New → PostgreSQL
2. Name: `reaco-leads-db`
3. Region: `Oregon` (or your preferred region)
4. Plan: `Starter` (can upgrade later)
5. Note the connection string

#### 1.3 Migrate Schema to PostgreSQL

The Drizzle schema uses MySQL syntax. For PostgreSQL, we need to:

1. Update `drizzle/schema.ts` to use PostgreSQL-compatible syntax
2. Run migrations: `pnpm db:push`

**Key changes needed:**
- Replace `mysqlTable` with `pgTable`
- Replace `mysqlEnum` with `pgEnum`
- Update column types for PostgreSQL compatibility

### Phase 2: Authentication Migration

#### 2.1 Update User Table Schema

Add `passwordHash` column to users table:

```sql
ALTER TABLE users ADD COLUMN passwordHash VARCHAR(255);
```

#### 2.2 Implement Email/Password Auth

The `server/_core/auth-email.ts` module provides:
- `hashPassword()` — Hash passwords with bcrypt
- `comparePassword()` — Verify passwords
- `createSessionToken()` — Create JWT tokens
- `verifySessionToken()` — Verify JWT tokens
- `registerEmailAuthRoutes()` — Register auth endpoints

#### 2.3 Update Frontend Auth

Replace Manus OAuth with email/password forms:

```typescript
// Old (Manus OAuth)
const loginUrl = getLoginUrl();

// New (Email/Password)
const response = await fetch('/api/auth/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
});
```

### Phase 3: File Storage Configuration

#### 3.1 AWS S3 Setup

1. Create S3 bucket: `reaco-leads-production`
2. Generate IAM credentials with S3 access
3. Add environment variables:
   - `AWS_S3_BUCKET`
   - `AWS_S3_REGION`
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

#### 3.2 Sync Production Data

Create a sync system to mirror data between Manus and Render:

```typescript
// Sync articles from Manus to Render
const articles = await fetch('https://manus-api/articles');
for (const article of articles) {
  await db.insert(articles).values(article);
}

// Sync images from Manus S3 to AWS S3
const files = await listManuS3Files();
for (const file of files) {
  await copyToAwsS3(file);
}
```

### Phase 4: Environment Variables

Set these on Render Dashboard → Environment:

```
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_SECRET=<generate-with-openssl>
AWS_S3_BUCKET=reaco-leads-production
AWS_S3_REGION=us-west-2
AWS_ACCESS_KEY_ID=<your-key>
AWS_SECRET_ACCESS_KEY=<your-secret>
RESEND_API_KEY=<your-resend-key>
VITE_APP_URL=https://bendoregonluxuryhomebuilder.com
VITE_API_URL=https://bendoregonluxuryhomebuilder.com/api
OWNER_EMAIL=kevin@reacohomes.com
```

### Phase 5: Deploy to Render

#### 5.1 Connect GitHub Repository

1. Push code to GitHub
2. Go to Render Dashboard → Create New → Web Service
3. Connect GitHub repository
4. Select branch: `main`
5. Build command: `pnpm install && pnpm build`
6. Start command: `node dist/server/_core/index.js`

#### 5.2 Configure Custom Domain

1. Render Dashboard → Service Settings → Custom Domains
2. Add: `bendoregonluxuryhomebuilder.com`
3. Add: `www.bendoregonluxuryhomebuilder.com`
4. Update DNS records to point to Render

#### 5.3 Deploy

1. Click "Deploy"
2. Monitor logs: `tail -f render.log`
3. Test endpoints: `curl https://bendoregonluxuryhomebuilder.com/api/health`

### Phase 6: Data Sync & Cutover

#### 6.1 Sync All Production Data

1. Export all articles from Manus
2. Export all leads from Manus
3. Export all subscribers from Manus
4. Import into Render PostgreSQL
5. Verify data integrity

#### 6.2 Update DNS

1. Update domain DNS to point to Render IP
2. Wait for DNS propagation (5-30 minutes)
3. Test: `curl https://bendoregonluxuryhomebuilder.com`

#### 6.3 Verify All Features

- [ ] Login/signup working
- [ ] Articles displaying
- [ ] Lead capture form working
- [ ] Email notifications sending
- [ ] File uploads working
- [ ] Images loading from S3
- [ ] Blog posts rendering
- [ ] Contact form submitting
- [ ] Newsletter signup working

## Rollback Plan

If issues occur during migration:

1. **Keep Manus running** until Render is fully tested
2. **DNS failover** — Point domain back to Manus if needed
3. **Database backup** — Keep Manus database backup for 30 days
4. **Code rollback** — Keep previous GitHub commits for rollback

## Post-Migration

### 1. Monitor Performance

- Check Render dashboard for CPU/memory usage
- Monitor database query performance
- Set up error tracking (Sentry, LogRocket)

### 2. Optimize Costs

- Render Starter plan: ~$7/month (web) + ~$15/month (database)
- Upgrade if needed based on traffic

### 3. Backup Strategy

- Daily automated backups of PostgreSQL
- Weekly export of articles/leads to S3
- Keep Manus S3 as long-term backup

## Troubleshooting

### Database Connection Issues

```bash
# Test PostgreSQL connection
psql postgresql://user:password@host:5432/dbname

# Check environment variables
echo $DATABASE_URL
```

### Authentication Failures

- Verify JWT_SECRET is set
- Check password hashing is working
- Verify session cookies are being set

### File Upload Issues

- Verify AWS credentials
- Check S3 bucket permissions
- Verify bucket name and region

### Email Not Sending

- Verify Resend API key
- Check email templates
- Review Resend dashboard for failures

## Support

For issues during migration:
1. Check Render logs: Dashboard → Service → Logs
2. Check PostgreSQL logs: Dashboard → Database → Logs
3. Contact Render support: https://render.com/support
