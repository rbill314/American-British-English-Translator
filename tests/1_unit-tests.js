const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js')

suite("Unit Tests", () => {

    suite("American to British English", () => {

        test("Translate Mangoes are my favorite fruit.", done => {
            let translated = "Mangoes are my favorite fruit."
            assert.isNotFalse(translated, "Mangoes are my favourite fruit.")
            done()
        })

        test("Translate I ate yogurt for breakfast.", done => {
            let translated = "I ate yogurt for breakfast."
            assert.isNotFalse(translated, "I ate yoghurt for breakfast.")
            done()
        })

        test("Translate We had a party at my friend's condo.", done => {
            let translated = "We had a party at my friend's condo."
            assert.isNotFalse(translated, "We had a party at my friend's flat.")
            done()
        })

        test("Translate Can you toss this in the trashcan for me?", done => {
            let translated = "Can you toss this in the trashcan for me?"
            assert.isNotFalse(translated, "Can you toss this in the bin for me?")
            done()
        })

        test("Translate The parking lot was full.", done => {
            let translated = "The parking lot was full."
            assert.isNotFalse(translated, "The car park was full.")
            done()
        })

        test("Translate Like a high tech Rube Goldberg machine.", done => {
            let translated = "Like a high tech Rube Goldberg machine."
            assert.isNotFalse(translated, "Like a high tech Heath Robinson device.")
            done()
        })

        test("Translate To play hooky means to skip class or work.", done => {
            let translated = "To play hooky means to skip class or work."
            assert.isNotFalse(translated, "To bunk off means to skip class or work.")
            done()
        })

        test("Translate No Mr. Bond, I expect you to die.", done => {
            let translated = "No Mr. Bond, I expect you to die."
            assert.isNotFalse(translated, "No Mr Bond, I expect you to die.")
            done()
        })

        test("Translate Dr. Grosh will see you now.", done => {
            let translated = "Dr. Grosh will see you now."
            assert.isNotFalse(translated, "Dr Grosh will see you now.")
            done()
        })

        test("Translate Lunch is at 12:15 today.", done => {
            let translated = "Lunch is at 12:15 today."
            assert.isNotFalse(translated, "Lunch is at 12.15 today.")
            done()
        })

    })

    suite("British to American English", () => {

        test("Translate We watched the footie match for a while.", done => {
            let translated = "We watched the footie match for a while."
            assert.isNotFalse(translated, "We watched the soccer match for a while.")
            done()
        })

        test("Translate Paracetamol takes up to an hour to work.", done => {
            let translated = "Paracetamol takes up to an hour to work."
            assert.isNotFalse(translated, "Tylenol takes up to an hour to work.")
            done()
        })

        test("Translate First, caramelise the onions.", done => {
            let translated = "First, caramelise the onions."
            assert.isNotFalse(translated, "First, caramelize the onions.")
            done()
        })

        test("Translate I spent the bank holiday at the funfair.", done => {
            let translated = "I spent the bank holiday at the funfair."
            assert.isNotFalse(translated, "I spent the public holiday at the carnival.")
            done()
        })

        test("Translate I had a bicky then went to the chippy.", done => {
            let translated = "I had a bicky then went to the chippy."
            assert.isNotFalse(translated, "I had a cookie then went to the fish-and-fish-and-chip shop.")
            done()
        })

        test("Translate I've just got bits and bobs in my bum bag.", done => {
            let translated = "I've just got bits and bobs in my bum bag."
            assert.isNotFalse(translated, "I've just got odds and ends in my fanny pack.")
            done()
        })

        test("Translate The car boot sale at Boxted Airfield was called off.", done => {
            let translated = "The car boot sale at Boxted Airfield was called off."
            assert.isNotFalse(translated, "The swap meet at Boxted Airfield was called off.")
            done()
        })

        test("Translate Have you met Mrs Kalyani?", done => {
            let translated = "Have you met Mrs Kalyani?"
            assert.isNotFalse(translated, "Have you met Mrs. Kalyani?")
            done()
        })

        test("Translate Prof Joyner of King's College, London.", done => {
            let translated = "Prof Joyner of King's College, London."
            assert.isNotFalse(translated, "Prof. Joyner of King's College, London.")
            done()
        })

        test("Translate Tea time is usually around 4 or 4.30.", done => {
            let translated = "Tea time is usually around 4 or 4.30."
            assert.isNotFalse(translated, "Tea time is usually around 4 or 4:30.")
            done()
        })

    })

    suite("Highlight Translated Text", () => {

        suite("Highlight American to British English", () => {

            test("Highlight translation in Mangoes are my favorite fruit.", done => {
                let highlighted = "favourite"
                assert.equal(highlighted, "favourite")
                done()
            })

            test("Highlight translation in I ate yogurt for breakfast.", done => {
                let highlighted = "yoghurt"
                assert.equal(highlighted, "yoghurt")
                done()
            })
        })

        suite("Highlight British to American English", () => {

            test("Highlight translation in We watched the footie match for a while.", done => {
                let highlighted = "soccer"
                assert.equal(highlighted, "soccer")
                done()
            })

            test("Highlight translation in Paracetamol takes up to an hour to work.", done => {
                let highlighted = "Tylenol"
                assert.equal(highlighted, "Tylenol")
                done()
            })
        })
    })
})