# 🚀 Deploying Krishna Care to Netlify

## ✅ Quick Deploy (Without Database)

Your website is now configured to work on Netlify with static content fallback!

### Step 1: Push Changes to GitHub
```bash
git add .
git commit -m "feat: Add static fallback data for Netlify deployment"
git push origin main
```

### Step 2: Deploy to Netlify
1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select the `krishnacare` repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Framework preset**: Next.js

### Step 3: Deploy!
Click "Deploy site" and wait for the build to complete.

## 📊 What Works Without Database:

✅ **Homepage** - All sections and features
✅ **About Page** - Company information and team
✅ **Services Page** - All service details
✅ **Gallery** - Static images from repository
✅ **Blog** - 3 static blog posts with full content
✅ **Contact Form** - Email functionality (configure separately)
✅ **All Animations** - Hero slider, testimonials, etc.

## 🔧 Optional: Add Database for Full Features

If you want full dynamic features (admin panel, dynamic blog, etc.):

### Option 1: Neon PostgreSQL (Recommended - Free)
1. Go to [Neon.tech](https://neon.tech/)
2. Create a free account and database
3. Copy your connection string
4. In Netlify Dashboard:
   - Go to Site Settings → Environment Variables
   - Add: `DATABASE_URL` = your Neon connection string
5. Redeploy your site

### Option 2: Supabase (Free tier available)
1. Go to [Supabase.com](https://supabase.com/)
2. Create a project
3. Get your connection string
4. Add to Netlify environment variables

### Option 3: PlanetScale (Free tier)
1. Go to [PlanetScale.com](https://planetscale.com/)
2. Create a database
3. Get connection string
4. Add to Netlify environment variables

## 🔐 Admin Panel Setup (Optional)

To enable the admin panel:

1. In Netlify Dashboard → Environment Variables, add:
   ```
   NEXTAUTH_SECRET=your-random-secret-key
   NEXTAUTH_URL=https://your-site.netlify.app
   ADMIN_EMAIL=admin@krishnacare.com
   ADMIN_PASSWORD=your-secure-password
   ```

2. Update Prisma schema to use PostgreSQL:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

3. Run migrations after deploying database

## 🌐 Domain Configuration

### Custom Domain Setup:
1. In Netlify Dashboard → Domain settings
2. Add your custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

## 📝 Current Configuration

Your site uses:
- **Static Blog Posts**: 3 posts about Krishna Care
- **Static Gallery**: 5 images from your facilities
- **Fallback System**: Automatic fallback when database unavailable
- **No Database Required**: Site fully functional without database

## 🎯 Deploy Checklist

- [x] Gallery images added to repository
- [x] Static blog data created
- [x] Fallback mechanisms implemented
- [x] Production environment configured
- [ ] Push to GitHub
- [ ] Deploy to Netlify
- [ ] Test all pages
- [ ] Configure custom domain (optional)
- [ ] Add database (optional)
- [ ] Enable admin panel (optional)

## 🔍 Troubleshooting

### Build Fails on Netlify
- Check build logs for errors
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Images Not Showing
- Ensure images are in `/public/images/` directory
- Check image paths in code
- Verify images are committed to Git

### API Routes Not Working
- API routes work automatically on Netlify
- Check function logs in Netlify dashboard
- Verify environment variables if needed

## 📞 Support

If you need help:
1. Check Netlify build logs
2. Review browser console for errors
3. Test locally with `npm run build` first

---

**Ready to deploy?** Follow the steps above and your Krishna Care website will be live in minutes! 🚀