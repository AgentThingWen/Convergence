require('dotenv').config({ path: './env-backend' });
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

// Environment check script for deployment troubleshooting
console.log('=== Convergence Backend Environment Check ===');
console.log('Node version:', process.version);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('Database URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not set');

// Check if Express can be loaded
try {
  const express = require('express');
  console.log('Express version:', express.version);
  console.log('Express loaded successfully');
} catch (error) {
  console.error('Failed to load Express:', error.message);
}

// Check if Sequelize can be loaded
try {
  const { Sequelize } = require('sequelize');
  console.log('Sequelize loaded successfully');
} catch (error) {
  console.error('Failed to load Sequelize:', error.message);
}

console.log('=== Environment Check Complete ===');
