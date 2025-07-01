// Deployment test script for Convergence Backend
require('dotenv').config();

console.log('Testing Convergence Backend deployment...');

// Test 1: Check environment variables
console.log('\n1. Environment Variables:');
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- PORT:', process.env.PORT);
console.log('- DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');

// Test 2: Check if Express can be loaded
console.log('\n2. Testing Express:');
try {
  const express = require('express');
  console.log('✓ Express loaded successfully');
} catch (error) {
  console.error('✗ Failed to load Express:', error.message);
  process.exit(1);
}

// Test 3: Check if Sequelize can be loaded
console.log('\n3. Testing Sequelize:');
try {
  const { Sequelize } = require('sequelize');
  console.log('✓ Sequelize loaded successfully');
} catch (error) {
  console.error('✗ Failed to load Sequelize:', error.message);
  process.exit(1);
}

// Test 4: Check if routes can be loaded
console.log('\n4. Testing Routes:');
try {
  require('./src/routes/userRoutes');
  require('./src/routes/shoppingListRoutes');
  console.log('✓ Routes loaded successfully');
} catch (error) {
  console.error('✗ Failed to load routes:', error.message);
  process.exit(1);
}

// Test 5: Check if main app can be loaded
console.log('\n5. Testing Main App:');
try {
  const app = require('./src/index');
  console.log('✓ Main app loaded successfully');
} catch (error) {
  console.error('✗ Failed to load main app:', error.message);
  process.exit(1);
}

console.log('\n✓ All deployment tests passed!');
console.log('The backend should deploy successfully.'); 