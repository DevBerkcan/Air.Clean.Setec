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
    'Company': req.body.company,
    'Name': req.body.name,
    'Email': req.body.email,
    'Phone': req.body.phone,
    'Postcode': req.body.postCode,
    'Location': req.body.location,
    'Are you a DEHOGA member?': req.body.dehoga,
    'Length of the plant in cm': req.body.length,
    'Width of the plant in cm': req.body.width,
    'Message': req.body.message,
    'How did you find out about us?': req.body.referer,
  }
  
  const htmlTemplate = getHtmlTemplate(templatePath, templateParam)

  const data = {
    from: '"Air Clean" <airclean@gmail.com>',
    to: "bilalbentoumi@gmail.com",
    subject: "Air Clean - Offer Request",
    html: htmlTemplate
  }

  transporter.sendMail(data, (err: any) => {

    if (err) {
      return res.status(500).json({ error: true, message: 'Failed to send' })
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' })
  })
}