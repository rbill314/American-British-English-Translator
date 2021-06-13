'use strict'

const Translator = require('../components/translator.js')

module.exports = function (app) {

  const translator = new Translator()

  app.route('/api/translate')
    .post((req, res) => {
      const {
        text,
        locale
      } = req.body

      if (!locale || text === undefined) {
        res.json({
          error: "Required field(s) missing"
        })
        return
      }

      if (text === "") {
        res.json({
          error: "No text to translate"
        })
        return
      }

      let translation;
      switch (locale) {
        case 'american-to-british':
          translation = translator.toBritishEnglish(text, true)
          break;
        case 'british-to-american':
          translation = translator.toAmericanEnglish(text, true)
          break;
        default:
          return res.json({
            error: "Invalid value for locale field"
          });
      }

      if (translation === text || !translation) {
        res.json({
          text,
          translation: "Everything looks good to me!"
        })
      } else {
        res.json({
          text,
          translation
        })
      }
    })
}