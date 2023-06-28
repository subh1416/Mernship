import express from 'express'
import nodemailer from 'nodemailer'

const sendEmail = (req, res) => {
  const { name, email, subject, message } = req.body
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: email,
      pass: 'kcffiqsmvhyyhuhk',
    },
  })

  // Configure the email options
  const mailOptions = {
    from: email,
    to: 'johnmoxley73@gmail.com',
    subject: `New Contact Form Submission: ${subject}`,
    text: `
   Name: ${name}
   Email: ${email}
   Subject: ${subject}
   Message: ${message}
 `,
  }

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error)
      res
        .status(500)
        .json({ message: 'An error occurred while sending the email' })
    } else {
      console.log('Email sent:', info.response)
      res.status(200).json({ message: 'Email sent successfully' })
    }
  })
}

export default sendEmail

// import express from 'express';
// import nodemailer from'nodemailer';
// import User from "../model/User.model.js";

// const app = express();

// // Middleware to parse JSON data
// app.use(express.json());

// // Handle POST request for form submission
// // app.post('/contact', (req, res) => {
// //   const { name, email, subject, message } = req.body;
// // })

// const sendEmail = async (req,res) =>{
//   const { name, email, subject, message } = req.body;
// try {
//   // Retrieve the user's password from the database based on the email
//   const user = await User.findOne({ email }); // Assuming you have a User model/schema

//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }

//   const password = user.password;

//   // const sendEmail = (req,res) =>{
//   //   const { name, email, subject, message } = req.body;
//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: email,
//       pass: password
//     }
//   });

//   // Configure the email options
//   const mailOptions = {
//     from: email,
//     to: 'johnmoxley73@gmail.com',
//     subject: `New Contact Form Submission: ${subject}`,
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Subject: ${subject}
//       Message: ${message}
//     `
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ message: 'An error occurred while sending the email' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email sent successfully' });
//     }
//   });
// } catch (error) {
//   console.error('Error retrieving user:', error);
//   res.status(500).json({ message: 'An error occurred while retrieving the user' });
//  }
// }

// export default sendEmail
