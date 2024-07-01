import { createTransport } from "nodemailer";

const sendMail = async (req, res, next) => {
  const { text, subject, to } = req.body;
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
  };
  await transporter.sendMail(mailOptions);
};

export default sendMail;
