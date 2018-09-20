const Translate = require('@google-cloud/translate')
const fs = require('fs')
const projectId = 'political-life'
const translate = new Translate({ projectId })
translate
  .getLanguages()
  .then(res =>
    fs.writeFile(`${__dirname}/languagesList.json`, JSON.stringify(res[0]))
  )
