const Translate = require('@google-cloud/translate')
const projectId = 'political-life'
const translate = new Translate({ projectId })
translate.getLanguages().then(res => console.log(res[0]))
