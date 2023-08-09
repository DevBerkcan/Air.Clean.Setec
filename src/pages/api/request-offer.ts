import type { NextApiRequest, NextApiResponse } from 'next'
import transporter from '@/lib/transporter'
import getHtmlTemplate from '@/lib/template'
import path from 'path'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  if (req.method != 'POST') {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  }

  const form = formidable({ multiples: true })

  const formData = new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject('error')
      }
      resolve({ fields, files })
    })
  })

  const { fields, files }: any = await formData

  const templatePath = path.join(path.resolve(), './src/templates/request-offer.hbs')
  const templateParam = {
    'Service-/Reinigungsart': fields.type[0],
    'Firmenname': fields.company[0],
    'Name Kontaktperson': fields.name[0],
    'Mailadresse Kontaktperson': fields.email[0],
    'Telefonnummer': fields.phone[0],
    'Straße & Hausnr.': fields.street[0],
    'PLZ': fields.postCode[0],
    'Ort': fields.location[0],
    'Länge der Anlage in m': fields.length[0],
    'Breite der Anlage in m': fields.width[0],
    'Sind Sie DEHOGA-Mitglied?': fields.dehoga[0],
    'Ihre Nachricht an uns': fields.message[0],
    'Wie sind Sie auf uns aufmerksam geworden?': fields.referer[0],
  }

  const attachments = files['pictures[]']?.map((picture: any) => {
    return {
      filename: picture.originalFilename,
      path: picture.filepath
    }
  })

  const htmlTemplate = getHtmlTemplate(templatePath, templateParam)

  const data = {
    from: '"AirClean VS" <airclean@gmail.com>',
    to: process.env.SEND_OFFER_MAIL_TO,
    subject: "AirClean VS - Angebotsanfrage",
    html: htmlTemplate,
    attachments
  }

  transporter.sendMail(data, (err: any) => {

    if (err) {
      return res.status(500).json({ error: true, message: 'Failed to send' })
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' })
  })
}