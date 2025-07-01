require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('../models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Placeholder for new API routes
const userRoutes = require('./routes/userRoutes');
const shoppingListRoutes = require('./routes/shoppingListRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/shopping-lists', shoppingListRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({
    status: 'Convergence Backend is running.',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Export the app for testing
module.exports = app;

// Only start the server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  
  const startServer = async () => {
    try {
      await db.sequelize.authenticate();
      console.log('Database connection established successfully.');
      
      // Sync database (in production, use migrations instead)
      if (process.env.NODE_ENV !== 'production') {
        await db.sequelize.sync();
        console.log('Database synced successfully.');
      }
      
      app.listen(PORT, () => {
        console.log(`Convergence Backend server running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
      });
    } catch (error) {
      console.error('Unable to start server:', error);
      process.exit(1);
    }
  };
  
  startServer();
}