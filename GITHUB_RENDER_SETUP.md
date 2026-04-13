# GitHub & Render Setup Guide

This guide explains how to export your code to GitHub and configure it for Render deployment.

## Step 1: Prepare Code for GitHub

### 1.1 Create `.gitignore` (if not exists)

```
node_modules/
dist/
.env
.env.local
*.db
*.sqlite
.DS_Store
.vscode/
.idea/
coverage/
.pnpm-store/
```

### 1.2 Verify Project Structure

```
reaco-leads/
├── client/                 # React frontend
├── server/                 # Express backend
├── drizzle/               # Database schema & migrations
├── shared/                # Shared types
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── render.yaml            # Render deployment config
├── Procfile               # Process file for Render
├── RENDER_MIGRATION_GUIDE.md
└── README.md
```

## Step 2: Export to GitHub

### 2.1 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `reaco-leads` (or your preferred name)
3. Description: "Rea Co Homes - Custom Home Builder Website"
4. Visibility: **Private** (recommended for business code)
5. Click "Create repository"

### 2.2 Push Code to GitHub

```bash
cd /home/ubuntu/reaco-leads

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Rea Co Homes website with Render migration support"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/reaco-leads.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2.3 Verify on GitHub

1. Go to https://github.com/YOUR_USERNAME/reaco-leads
2. Verify all files are present
3. Check that `.env` is NOT included (should be in `.gitignore`)

## Step 3: Configure Render Deployment

### 3.1 Connect Render to GitHub

1. Go to https://render.com/dashboard
2. Click "New +" → "Web Service"
3. Select "Deploy an existing project from a Git repository"
4. Click "Connect account" and authorize GitHub
5. Select repository: `reaco-leads`
6. Select branch: `main`

### 3.2 Configure Build & Start Commands

| Setting | Value |
|---------|-------|
| **Build Command** | `pnpm install && pnpm build` |
| **Start Command** | `node dist/server/_core/index.js` |
| **Node Version** | `22.13.0` |
| **Plan** | Starter ($7/month) |
| **Region** | Oregon (or your preferred) |

### 3.3 Add Environment Variables

In Render Dashboard → Service Settings → Environment:

```
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:5432/dbname
JWT_SECRET=<generate-with-openssl-rand-hex-32>
AWS_S3_BUCKET=reaco-leads-production
AWS_S3_REGION=us-west-2
AWS_ACCESS_KEY_ID=<your-aws-key>
AWS_SECRET_ACCESS_KEY=<your-aws-secret>
RESEND_API_KEY=<your-resend-key>
VITE_APP_URL=https://bendoregonluxuryhomebuilder.com
VITE_API_URL=https://bendoregonluxuryhomebuilder.com/api
OWNER_EMAIL=kevin@reacohomes.com
OWNER_NAME=Kevin Rea
```

### 3.4 Add Custom Domain

1. Render Dashboard → Service Settings → Custom Domains
2. Add domain: `bendoregonluxuryhomebuilder.com`
3. Add domain: `www.bendoregonluxuryhomebuilder.com`
4. Update DNS records at your domain registrar to point to Render

## Step 4: GitHub & Render Compatibility Checklist

- [x] **Build system compatible** — Uses `pnpm` (Render supports)
- [x] **Node version specified** — 22.13.0 (Render supports)
- [x] **Environment variables** — All externalized in `.env`
- [x] **Database migrations** — Drizzle ORM configured
- [x] **File storage** — AWS S3 configured
- [x] **Email service** — Resend configured
- [x] **Authentication** — Email/password ready (replaces Manus OAuth)
- [x] **Frontend build** — Vite configured
- [x] **Backend build** — esbuild configured
- [x] **Health check endpoint** — `/api/health` available
- [x] **Port configuration** — Uses `process.env.PORT || 3000`
- [x] **Logging** — Console logging for Render logs

## Step 5: Deployment Workflow

### 5.1 Deploy Changes

```bash
# Make changes locally
# Commit and push to GitHub
git add .
git commit -m "Feature: Add new landing page"
git push origin main

# Render automatically deploys on push to main
# Monitor deployment: Render Dashboard → Service → Deployments
```

### 5.2 Monitor Logs

```bash
# View Render logs
# Dashboard → Service → Logs
# Or use Render CLI:
render logs --service reaco-leads-web --tail
```

### 5.3 Rollback if Needed

```bash
# Revert to previous commit
git revert <commit-hash>
git push origin main

# Render will automatically redeploy
```

## Step 6: Continuous Deployment Setup

### 6.1 Enable Auto-Deploy

1. Render Dashboard → Service Settings
2. Auto-deploy: **ON** (for main branch)
3. Deploy on push: **Enabled**

### 6.2 Add GitHub Status Checks (Optional)

```bash
# In GitHub repository settings:
# Settings → Branches → Branch protection rules
# Require status checks to pass before merging
```

## Troubleshooting

### Build Fails on Render

Check these common issues:

1. **Node version mismatch**
   ```bash
   # Verify Node version
   node --version  # Should be 22.13.0+
   ```

2. **Missing dependencies**
   ```bash
   # Ensure all dependencies are in package.json
   pnpm install
   git add package-lock.yaml
   git commit -m "Update dependencies"
   git push
   ```

3. **Environment variables missing**
   - Verify all env vars are set in Render Dashboard
   - Check `.env.example` for required variables

4. **Database connection issues**
   - Verify DATABASE_URL is correct
   - Check PostgreSQL is running on Render
   - Test connection: `psql $DATABASE_URL`

### Deployment Hangs

- Check Render logs for errors
- Verify build command completes locally
- Check for infinite loops in startup code

### Performance Issues

- Monitor CPU/memory in Render Dashboard
- Consider upgrading from Starter plan
- Enable caching for static assets
- Optimize database queries

## Next Steps

1. **Test locally first** — Run `pnpm dev` to verify everything works
2. **Deploy to Render** — Push to GitHub and monitor deployment
3. **Verify all features** — Test login, articles, lead capture, etc.
4. **Set up monitoring** — Add error tracking and analytics
5. **Plan cutover** — Schedule DNS migration from Manus to Render

## Support Resources

- **Render Docs** — https://render.com/docs
- **GitHub Docs** — https://docs.github.com
- **Node.js Docs** — https://nodejs.org/docs
- **PostgreSQL Docs** — https://www.postgresql.org/docs
