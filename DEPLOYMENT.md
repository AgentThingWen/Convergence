# Deployment Guide for Convergence

This guide covers deploying the Convergence backend to Render (Node.js + Express + Sequelize/Postgres).

## 🚀 Deployment Overview

- **Backend**: Deploy to Render (Node.js + Express + Sequelize)
- **Database**: PostgreSQL (managed by Render)

## 📋 Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to GitHub
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **Environment Variables**: Prepare your production environment variables

## 🔧 Environment Variables Setup

### Backend (Render)
Set these environment variables in your Render dashboard:

```env
NODE_ENV=production
JWT_SECRET=your_super_secure_jwt_secret_key_production_2025
PORT=10000
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
DB_HOST=your_db_host
DB_PORT=5432
```

## 🎯 Step-by-Step Deployment

### 1. Deploy Backend to Render

1. **Connect Repository**:
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service**:
   - **Name**: `convergence-backend`
   - **Runtime**: Node
   - **Build Command**: `cd backend && npm install && npx sequelize-cli db:migrate`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free

3. **Set Environment Variables**:
   - Add the environment variables listed above
   - Make sure `JWT_SECRET` is a strong, unique value
   - Set all DB_* variables for your Postgres instance

4. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your backend URL (e.g., `https://convergence-backend.onrender.com`)

---

*Frontend deployment is no longer required as the frontend has been removed.*