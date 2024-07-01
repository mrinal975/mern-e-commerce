import { createTransport } from "nodemailer";

const sendMail = async (to, subject, text) => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // send mail with defined transport object
  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
  };
  await transporter.sendMail(mailOptions);
};

export default sendMail;
