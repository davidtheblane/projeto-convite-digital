"use client"

import recoveryTemplate from "../lib/mail/templates/admin/recover-password"
import welcomeTemplate from "../lib/mail/templates/admin/welcome"

import { sendMail } from "../lib/mail/service/mail.service"
   
   async function welcomeMail(name: string, email: string){
        const mailOptions = {
            recipients: [email],
            subject: `Bem vindo ${name}`,
            text: `Seja bem vindo ${name}`,
            html: welcomeTemplate(name, email),
        }
        return await sendMail(mailOptions)
    }

    async function recoveryMail(name: string, email: string){
        const mailOptions = {
            recipients: [email],
            subject: `Olá ${name}!`,
            text: `Vamos resetar sua senha`,
            html: recoveryTemplate(name, email),
        }
        const response = await sendMail(mailOptions)
        return response
    }

export { welcomeMail, recoveryMail }