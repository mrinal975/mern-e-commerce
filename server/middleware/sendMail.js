import { createTransport } from "nodemailer";

const sendMail = async (email, subject, text) => {
  try {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: email,
      subject: subject,
      text: text,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
