const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendResetPasswordEmail(email, resetToken) {
  try {
    const mailOptions = {
      from: 'noreplay@hello.com',
      to: email,
      subject: 'Password Reset',
      html: `<h2> Please click on the link to reset your password:</h2>
      <p> ${process.env.CLIENT_URL}/reset-password?token=${resetToken}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Reset password email sent successfully');
  } catch (error) {
    console.error('Error sending reset password email:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
}

module.exports = { sendResetPasswordEmail };
