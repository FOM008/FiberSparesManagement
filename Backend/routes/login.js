// const express = require('express');
// const jwt = require('jsonwebtoken'); 
// const router = express.Router();

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ where: { email} });

//     // Check if the user exists and the password is correct
//     if (user && compareSync(password, user.password)) {
//       // Password is correct, create a JWT token
//       const token = jwt.sign({ userId: user.id, email: user.email }, 'dfjsfrfhrefe', {
//         expiresIn: '1h', // You can customize the expiration time
//       });

//       res.status(200).json({ token });
//     } else {
//       // User not found or password incorrect
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// module.exports = router;