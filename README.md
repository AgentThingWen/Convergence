# Convergence

My personal e-commerce platform project. Started this as a way to learn full-stack development, and it actually turned out pretty decent! 

## What This Is

Basically, I wanted to build something real instead of just following tutorials. This is a full e-commerce site where users can:
- Sign up and log in (with proper security)
- Add/edit/delete products (if they own them)
- Browse all products
- Manage their profile

## Tech Stack (What I Used)

### Backend  
- **Node.js + Express** - The classic combo
- **JWT** - For authentication (tokens are cool)
- **bcrypt** - Password hashing (security first!)
- **Sequelize + Postgres** - Relational database (production-ready)
- **Rate limiting** - Prevent brute force attacks
- **Input validation** - Because users will try to break things

## Project Structure

```
Convergence/
├── backend/                  # Express API
│   ├── src/
│   │   ├── index.js         # Server entrypoint
│   │   ├── routes/          # API routes
│   │   ├── models/          # Sequelize models
│   │   ├── migrations/      # Sequelize migrations
│   │   └── config/          # DB config
│   ├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (comes with Node)

### Setup

1. **Clone this repo**
   ```bash
   git clone <your-repo-url>
   cd Convergence
   ```

2. **Environment files** (create these manually)
   
   Create `backend/.env`:
   ```env
   JWT_SECRET=your_super_secure_jwt_secret_key_2025
   PORT=10000
   NODE_ENV=development
   DB_USERNAME=your_db_user
   DB_PASSWORD=your_db_password
   DB_DATABASE=your_db_name
   DB_HOST=localhost
   DB_PORT=5432
   ```

3. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Run migrations**
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start development**
   ```bash
   npm start
   ```

6. **Check it out**
   - Backend: http://localhost:10000

## API Endpoints

- User registration/login
- Shopping list CRUD
- Product and retailer CRUD
- JWT authentication

## Development Notes

### Running Tests
```bash
cd backend
test
```

## Security Features

- **Password hashing** - bcrypt with salt
- **JWT tokens** - Stateless auth
- **Rate limiting** - 5 login attempts per 15 minutes
- **Input validation** - Server-side validation
- **CORS** - Properly configured

## Contributing

This is my personal project, but if you find bugs or have suggestions, feel free to:
1. Fork it
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

ISC License - basically do whatever you want with it.

---

**Built with ❤️ and lots of coffee while learning full-stack development**
