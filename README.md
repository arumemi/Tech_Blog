# Ese Tech Blog 🚀

A modern, full-featured tech blog built with Next.js 16, React 19, Prisma 7, and PostgreSQL.

## 📋 Features

- ✨ Modern UI with Tailwind CSS 4.0
- 📝 Rich text editing with Jodit React Editor
- 🗄️ PostgreSQL database with Prisma ORM
- 🎨 Responsive design with animations
- 🔍 Search functionality
- 📱 Mobile-friendly navigation
- 🌐 Multi-page application (Home, Articles, About, Write)
- 💾 State management with Zustand
- 🎯 Type-safe with TypeScript

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.4 (App Router)
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 4.0
- **Database:** PostgreSQL (Prisma Postgres)
- **ORM:** Prisma 7.3.0
- **State Management:** Zustand 5.0.10
- **Rich Text Editor:** Jodit React 5.2.38
- **Icons:** React Icons 5.5.0
- **Language:** TypeScript 5

## 📁 Project Structure

```
my-app/
├── app/
│   ├── api/
│   │   └── posts/          # API routes for posts
│   ├── components/
│   │   ├── general/        # Navbar, Footer
│   │   ├── home/           # RecentPost
│   │   └── modals/         # SignInModal
│   ├── store/              # Zustand stores
│   ├── about/              # About page
│   ├── articles/           # Articles listing
│   └── write/              # Write new post
├── lib/
│   ├── prisma.ts           # Prisma client instance
│   └── utils.ts            # Utility functions
├── prisma/
│   └── schema.prisma       # Database schema
├── types/
│   └── index.ts            # TypeScript types
├── PageLayout/
│   └── ContainerLay.tsx    # Layout wrapper
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- PostgreSQL database (or Prisma Postgres)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ese_Tech/my-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your database connection string:
```env
DATABASE_URL="postgres://username:password@host:port/database?sslmode=require"
```

4. Sync the database:
```bash
npx prisma db push
```

5. Generate Prisma Client:
```bash
npx prisma generate
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📊 Database Schema

### Post Model
```prisma
model Post {
  id                  String   @id @default(cuid())
  title               String
  slug                String   @unique
  content             String   @db.Text
  excerpt             String   @db.Text
  coverImageURL       String
  coverImagePublicId  String
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
  authorId            String
}
```

## 🔑 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 API Routes

### GET /api/posts
Fetch all posts with optional limit parameter.

### POST /api/posts
Create a new post.

### GET /api/posts/[slug]
Get a specific post by slug.

### PUT /api/posts/[slug]
Update a post by slug.

### DELETE /api/posts/[slug]
Delete a post by slug.

## 🎨 Styling

This project uses Tailwind CSS 4.0 with custom configurations:
- Dark theme with gradient backgrounds
- Custom animations (fade-in, slide, pulse)
- Responsive design for all screen sizes
- Hover effects and transitions

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `prisma.config.ts` - Prisma 7 configuration
- `eslint.config.mjs` - ESLint configuration

## 📦 Key Dependencies

- `@prisma/client` & `@prisma/adapter-pg` - Database ORM
- `next` - React framework
- `react` & `react-dom` - UI library
- `zustand` - State management
- `jodit-react` - Rich text editor
- `react-icons` - Icon library

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Ese Fapohunda**
- Email: esefapohunda@gmail.com
- Facebook: [essi.faps.2025](https://www.facebook.com/essi.faps.2025)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- All contributors and open-source libraries used in this project
