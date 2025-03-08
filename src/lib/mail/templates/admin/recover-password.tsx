// eslint-disable-next-line @typescript-eslint/no-unused-vars
const recoveryTemplate = (name: string, email: string) => {
    return `
     <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Event+!</title>
        <link rel="stylesheet" href="styles.css"> 
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4; width: 100%;">
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <!-- Header -->
                <tr>
                    <td align="center" bgcolor="#1a73e8" style="padding: 40px 0;">
                        <img src="@public('logo-white.svg')" alt="Event Logo" width="200" style="display: block;">
                    </td>
                </tr>
                
                <!-- Main Content -->
                <tr>
                    <td bgcolor="#ffffff" style="padding: 40px 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="color: #333333; font-family: Arial, sans-serif; font-size: 24px; font-weight: bold;">
                                    <h1 style="margin: 0; color: #1a73e8;">Event+</h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 0 30px 0; color: #333333; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                </td>
                            </tr>
                            
                            <!-- Features -->
                            <tr>
                                <td style="padding: 0 0 20px 0;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8f9fa; border-radius: 5px;">
                                        <tr>
                                            <td style="padding: 20px; font-family: Arial, sans-serif;">
                                                <h2 style="color: #1a73e8; font-size: 18px; margin: 0 0 15px 0;">Redefinição de Senha</h2>
                                                
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tr>
                                            <td align="center" bgcolor="#1a73e8" style="border-radius: 4px;">
                                                <a href="#" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 4px;">Clique aqui para redefinir a senha</a>
                                            </td>
                                        </tr>                                    
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <tr>
                                <td style="padding: 0 0 30px 0; color: #333333; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                    <p>
                                        Se não iniciou esta redefinição de senha e recebeu este email, <a href="mailto:eventplus@example.com" style="color:#1a73e8; text-decoration:none" target="_blank">fale conosco</a> para resolvermos este problema.</p>
                                    <p style="margin-top: 25px;">Atenciosamente,<br>Equipe Event+</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                    <td bgcolor="#f8f9fa" style="padding: 30px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center" style="color: #666666; font-family: Arial, sans-serif; font-size: 14px;">
                                    <p>&copy; 2025 Event+. Todos os direitos reservados.</p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 20px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 12px;">
                                    <p>Se você não deseja mais receber esses e-mails, você pode <a href="[Unsubscribe URL]" style="color:#1a73e8; text-decoration:none">cancelar a inscrição</a> a qualquer momento.</p>
                                </td>
                            </tr>
                        </table>
                        <a href="https://www.eventplus.com.br" target="_blank" style="margin-top: 5px;">Event+</a>
                    </td>
                </tr>
            </table>
        </center>
    </body>
    </html>
`
};

export default recoveryTemplate;