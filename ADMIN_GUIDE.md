# Krishna Care Admin Panel Guide

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```
The website will be available at: http://localhost:3001 (or the next available port)

### Building for Production
```bash
npm run build
npm start
```

## 🔐 Admin Access

### Admin Login
- **URL**: `/admin/login`
- **Email**: `admin@krishnacare.com`
- **Password**: `admin123`

### Admin Features
- **Dashboard**: Overview with statistics
- **Gallery Management**: Add, edit, delete images
- **Blog Management**: Create and manage blog posts
- **Contact Management**: View contact form submissions
- **User Management**: Manage admin users

## 📁 Admin Panel Structure

### Dashboard (`/admin/dashboard`)
- View website statistics
- Quick overview of content

### Gallery Management (`/admin/gallery`)
- Add new images with titles, descriptions, categories
- Edit existing images
- Delete images
- Search and filter by category
- Toggle image visibility

### Blog Management (`/admin/blog`)
- Create new blog posts with rich content
- Edit existing posts
- Publish/unpublish posts
- Manage categories and tags
- SEO-friendly URLs (slugs)

### Contact Management (`/admin/contacts`)
- View all contact form submissions
- Mark messages as read/responded
- Filter by status
- Export contact data

## 🗄️ Database

### Database File
- Location: `prisma/dev.db` (SQLite)
- Can be opened with any SQLite browser

### Seeding Sample Data
```bash
npm run db:seed
```
This creates:
- Admin user
- Sample gallery images
- Sample blog posts

### Database Schema
- **Users**: Admin users with roles
- **GalleryImage**: Website gallery images
- **BlogPost**: Blog content with SEO features
- **Contact**: Contact form submissions

## 📝 Content Management

### Adding Gallery Images
1. Go to Admin Panel > Gallery
2. Click "Add Image"
3. Enter image URL, title, description, category
4. Set alt text for accessibility
5. Toggle active status

### Creating Blog Posts
1. Go to Admin Panel > Blog
2. Click "New Post"
3. Enter title (slug auto-generated)
4. Write content with HTML support
5. Add excerpt, author, category, tags
6. Publish when ready

### Managing Contacts
1. Go to Admin Panel > Contacts
2. View all submissions
3. Update status as needed
4. Filter by status (pending, read, responded, closed)

## 🔧 Technical Details

### Technologies Used
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: SQLite (easily changeable to PostgreSQL/MySQL)
- **Authentication**: NextAuth.js with credentials
- **Styling**: Tailwind CSS with Framer Motion animations

### API Endpoints

#### Public APIs
- `GET /api/gallery` - Fetch gallery images
- `GET /api/blog` - Fetch blog posts
- `GET /api/blog/[slug]` - Fetch single blog post
- `POST /api/contact` - Submit contact form

#### Admin APIs (Authenticated)
- `GET/POST /api/admin/gallery` - Gallery management
- `GET/POST /api/admin/blog` - Blog management
- `GET /api/admin/contacts` - Contact management
- `GET /api/admin/stats` - Dashboard statistics

### File Structure
```
src/
├── app/
│   ├── admin/          # Admin panel pages
│   ├── api/            # API routes
│   ├── blog/           # Blog pages
│   └── ...             # Other pages
├── components/
│   ├── admin/          # Admin components
│   ├── ui/             # UI components
│   └── ...             # Website components
├── lib/
│   ├── auth.ts         # Authentication config
│   ├── prisma.ts       # Database client
│   └── utils.ts        # Utilities
└── types/              # TypeScript types
```

## 🛡️ Security Features
- Password hashing with bcrypt
- Role-based access control
- Session-based authentication
- Protected API routes
- Input validation and sanitization

## 📱 Responsive Design
- Mobile-friendly admin panel
- Touch-optimized interface
- Responsive tables and forms
- Modern UI with Tailwind CSS

## 🚀 Deployment Notes
- Set environment variables in production
- Update database connection for production
- Configure image hosting (Cloudinary recommended)
- Set up SSL certificates
- Configure domain and DNS

## 📞 Support
For technical support or questions about the admin panel, please contact the development team.