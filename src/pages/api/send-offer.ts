// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import transporter from '@/lib/transporter'
import getHtmlTemplate from '@/lib/template'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  if (req.method != 'POST') {
    res.status(405).json('Not Allowed')
  }

  const templatePath = path.join(path.resolve(), './src/templates/send-offer.hbs')
  const templateParam = {
    'Firmenname': req.body.company,
    'Name Kontaktperson': req.body.name,
    'Mailadresse Kontaktperson': req.body.email,
    'Telefonnummer': req.body.phone,
    'Straße & Hausnr.': req.body.street,
    'PLZ': req.body.postCode,
    'Ort': req.body.location,
    'Länge der Anlage in cm': req.body.length,
    'Breite der Anlage in cm': req.body.width,
    'Sind Sie DEHOGA-Mitglied?': req.body.dehoga,
    'Ihre Nachricht an uns': req.body.message,
    'Wie sind Sie auf uns aufmerksam geworden?': req.body.referer,
  }
  
  const htmlTemplate = getHtmlTemplate(templatePath, templateParam)

  const data = {
    from: '"Air Clean" <airclean@gmail.com>',
    to: process.env.SEND_OFFER_MAIL_TO,
    subject: "Air Clean - Angebotsanfrage",
    html: htmlTemplate
  }

  transporter.sendMail(data, (err: any) => {

    if (err) {
      return res.status(500).json({ error: true, message: 'Failed to send' })
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' })
  })
}