#!/bin/bash

# Build script for Convergence Backend
echo "Starting Convergence Backend build..."

# Clean install with specific flags
echo "Installing dependencies..."
npm ci --only=production --no-optional

# Clear npm cache if needed
echo "Clearing npm cache..."
npm cache clean --force

# Reinstall Express specifically if there are issues
echo "Ensuring Express is properly installed..."
npm install express@4.18.2 --no-save

# Run database migrations
echo "Running database migrations..."
npx sequelize-cli db:migrate

echo "Build completed successfully!" 