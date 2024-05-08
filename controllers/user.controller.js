// controllers/user.js

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userService = require("../services/user.service");
const mailService = require("../utils/mailService")

async function signup(req, res) {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await userService.getUserByEmailUC(email);
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await userService.createUserUC({
      username,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Validate credentials and authenticate user
    const user = await userService.getUserByEmailUC(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const accessToken = jwt.sign(
      { userId: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    // Set JWT as HTTP-only cookie
    res.cookie("token", accessToken, {
      httpOnly: true,
      // You can add additional options here, such as secure: true for HTTPS
    });

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


async function logout(req, res) {
  // You can implement logout logic here if needed
  // For example, clearing the token on the client-side
  res.status(200).json({ message: "Logout successful" });
}

async function forgotPassword(req, res) {
  const { email } = req.body; // Assuming email is sent in the request body

  try {
    // // Generate a reset password token
    const resetToken = jwt.sign({ email }, process.env.RESET_TOKEN_SECRET, { expiresIn: '1h' });

    // Send reset password email
    await mailService.sendResetPasswordEmail(email, resetToken);

    res.status(200).json({ message: 'Reset password email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while processing your request' });
  }
}


async function resetPassword(req, res) {
  const { token, newPassword } = req.body;
  try {
  // Verify the reset password token
  const decodedToken = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
  
  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update user's password in the database
  await userService.updateUserPasswordUC(decodedToken.email, hashedPassword);
  
  res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while processing your request' });
  }
}

module.exports = {
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword,
};
