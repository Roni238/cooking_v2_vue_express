const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMPT_PASS16
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html:`<!doctype html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                    div{
                        background-color:rgb(197,191,167);
                        color:rgb(93,87,73);
                        padding:15px;
                    }
                    h1{
                        color:rgb(93,87,73); 
                    }
                </style>
              </head>

              <body>
              <h1>Для подтверждения почты перейдите по ссылке</h1>
              <a href="${link}">${link}</a>
              </body>
            </html>`
        })
    }
}

module.exports = new MailService();