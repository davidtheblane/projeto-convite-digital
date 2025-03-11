'use server'
import nodemailer from 'nodemailer';

    const transporter = nodemailer.createTransport({
      host: process.env['MAIL_HOST'],
      port: Number(process.env['MAIL_PORT']),
      secure: false, // use SSL
      auth: {
        user: process.env['MAIL_USER'],
        pass: process.env['MAIL_PASSWORD'],
      },
    });

  export const sendMail = async(options) => {
    const { recipients, html, subject, text } = options;

    console.log('mailUser', process.env['MAIL_USER']);

    const mailOptions = {
      from: process.env['MAIL_USER'],
      to: recipients,
      subject,
      text,
      html,
    };

    try {
      const mailSent = await transporter.sendMail(mailOptions);
      console.log('E-mail enviado:', mailSent);   
      return { success: true, message: 'E-mail enviado com sucesso!' };
     } catch (error) {
      console.log('Error sending email', error);
      return { success: false, message: 'Erro ao enviar e-mail.' };
    }
  }

//   verifyMail() {
//     this.mailTransporter().verify(function (error, success) {
//       if (error) {
//         console.log('Connection error: ', error);
//       } else {
//         console.log('Server is ready to take our messages');
//       }
//     });
//   }
