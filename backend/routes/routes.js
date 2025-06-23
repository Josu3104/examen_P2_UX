const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Prueba
router.get('/test', (req, res) => {
    
});

// Registro 
router.post('/register', async (req, res) => {
  
});

// Login
router.post('/login', async (req, res) => {
    
});

module.exports = router;