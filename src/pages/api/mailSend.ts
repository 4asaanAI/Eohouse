import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, otp, text, resume, value, image } = req.body;
  
  

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      
    },
  });

  try {
    if (otp) {
      const otpMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP Code Is: ${otp} It Will Expire In 10 Minutes.`,
      };

      await transporter.sendMail(otpMailOptions);
      res.status(200).json({ message: "OTP sent successfully" });
    }

    if (text) {
      const queryMailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: "Support And Help",
        text: `${text}  ${email}`,
      };

      await transporter.sendMail(queryMailOptions);
      res.status(200).json({ message: "Message received" });
    }

    if (resume) {
      const joinMailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: "Join EOH",
        text:  `${resume}  ${email}`,
      };

      

      await transporter.sendMail(joinMailOptions);
      res.status(200).json({ message: "Message received" });
    }

    
      if (image) {
        
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, 
          subject: "Payment Verification",
          text: ` A new payment has been made from ${email}`,
          attachments: [
            {
              filename: "payment_verification.jpg", 
              content: image.split('base64,')[1],
              encoding: 'base64'
            },
          ],
        };
  
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Payment verification email sent successfully" });
      }
    
    
    if (value) {
      const ThanksOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thanks For Choosing EOH",
        text: `We Will Review Your Payment Of ${value}. Within 24 Hours We Will Update Your Data In Site And Notify You. Thanks For Choosing EOH.`

 
      };

      await transporter.sendMail(ThanksOptions);
      res.status(200).json({ message: "Message received" });
    }

  } 

   catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
