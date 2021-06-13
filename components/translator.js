const americanOnly = require('./american-only.js')
const americanToBritishSpelling = require('./american-to-british-spelling.js')
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishToAmericanTitles = require("./british-to-american-titles.js")
const britishOnly = require('./british-only.js')

const reverseDict = (obj) =>
    Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({
        [v]: k
    })))

class Translator {

    toBritishEnglish(text) {
        let translated = text

        const dict = {
            ...americanOnly,
            ...americanToBritishSpelling
        }
        const titles = americanToBritishTitles

        for (const prop in dict) {
            const regex = new RegExp('\\b' + prop + '\\b', 'gi')
            if (translated.match(regex)) {
                const britishDict = '<span class="highlight">' + dict[prop] + '</span>'
                translated = translated.replace(regex, britishDict)
            }
        }

        for (const prop in titles) {
            const regex = new RegExp(`(?<=^|[.'"\\s])${prop}(?=[.'"\\s]|$)`, 'gi')
            if (translated.match(regex)) {
                let capTitle = titles[prop]
                const britishTitles = '<span class="highlight">' + capTitle + '</span>'
                translated = translated.replace(regex, britishTitles)
            }
        }

        const britishTime = new RegExp(`(\\d{1,2}):(\\d{1,2})`, 'g')
        translated = translated.replace(britishTime, `<span class="highlight">$1.$2</span>`)

        if (Object.keys(translated).length === 0) return null

        if (!translated) {
            return text
        }

        console.log(translated)
        return translated
    }

    toAmericanEnglish(text) {
        let translated = text

        const reverseAmericanToBritishSpelling = reverseDict(americanToBritishSpelling)
        const dict = {
            ...britishOnly,
            ...reverseAmericanToBritishSpelling
        }
        const titles = britishToAmericanTitles

        for (const prop in dict) {
            const regex = new RegExp('\\b' + prop + '\\b', 'gi')
            if (translated.match(regex)) {
                const americanDict = '<span class="highlight">' + dict[prop] + '</span>'
                translated = translated.replace(regex, americanDict)
            }
        }

        for (const prop in titles) {
            const regex = new RegExp(`(?<=^|[.'"\\s])${prop}(?=[.'"\\s]|$)`, 'gi')
            if (translated.match(regex)) {
                let capTitle = titles[prop].charAt(0) + titles[prop].slice(1)
                const americanTitles = '<span class="highlight">' + capTitle + '</span>'
                translated = translated.replace(regex, americanTitles)
            }
        }

        const americanTime = new RegExp(`(\\d{1,2}):(\\d{1,2})`, 'g')
        translated = translated.replace(americanTime, `<span class="highlight">$1:$2</span>`)

        if (Object.keys(translated).length === 0) return null

        if (!translated) {
            return text
        }
        return translated
    }

}

module.exports = Translator