import nodemailer from 'nodemailer'

const options: any = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secureConnection: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
}

const transporter = nodemailer.createTransport(options)

export default transporter