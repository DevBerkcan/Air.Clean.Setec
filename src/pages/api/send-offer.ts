// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import * as fs from 'fs'
import transporter from '@/lib/transporter'
import * as handlebars from 'handlebars'

function getHtmlTemplate(replacements: {}) {
  const filePath = path.join(path.resolve(), './src/templates/send-offer.html')
  const source = fs.readFileSync(filePath, 'utf-8').toString()
  const template = handlebars.compile(source)
  return template(replacements)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  
  const replacements = {
    ...req.body,
    submittedAt: Date()
  }

  const htmlTemplate = getHtmlTemplate(replacements)

  transporter.sendMail({
    from: '"Air Clean" <airclean@gmail.com>',
    to: "bilalbentoumi@gmail.com",
    subject: "Air Clean - Offer Request",
    html: htmlTemplate
  }, (err: any, info: any) => {

    if (err) {
      return res.status(500).json({ error: true, message: 'Failed to send' })
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' })
  })

}
