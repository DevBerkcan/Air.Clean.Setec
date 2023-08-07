import * as fs from 'fs'
import * as handlebars from 'handlebars'

function getHtmlTemplate(filePath: string, replacements: {}) {

  replacements = {
    data: replacements,
    submittedAt: Date()
  }

  const source = fs.readFileSync(filePath, 'utf-8').toString()

  return handlebars.compile(source)(replacements)
}

export default getHtmlTemplate