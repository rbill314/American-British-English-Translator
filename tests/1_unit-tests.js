const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js')

suite("Unit Tests", () => {

    suite("American to British English", () => {

        test("Translate Mangoes are my favorite fruit.", done => {
            //done()
        })

        test("Translate I ate yogurt for breakfast.", done => {
            //done()
        })

        test("Translate We had a party at my friend's condo.", done => {
            //done()
        })

        test("Translate Can you toss this in the trashcan for me?", done => {
            //done()
        })

        test("Translate The parking lot was full.", done => {
            //done()
        })

        test("Translate Like a high tech Rube Goldberg machine.", done => {
            //done()
        })

        test("Translate To play hooky means to skip class or work.", done => {
            //done()
        })

        test("Translate No Mr. Bond, I expect you to die.", done => {
            //done()
        })

        test("Translate Dr. Grosh will see you now.", done => {
            //done()
        })

        test("Translate Lunch is at 12:15 today.", done => {
            //done()
        })

    })

    suite("British to American English", () => {

        test("Translate We watched the footie match for a while.", done => {
            //done()
        })

        test("Translate Paracetamol takes up to an hour to work.", done => {
            //done()
        })

        test("Translate First, caramelise the onions.", done => {
            //done()
        })

        test("Translate I spent the bank holiday at the funfair.", done => {
            //done()
        })

        test("Translate I had a bicky then went to the chippy.", done => {
            //done()
        })

        test("Translate I've just got bits and bobs in my bum bag.", done => {
            //done()
        })

        test("Translate The car boot sale at Boxted Airfield was called off.", done => {
            //done()
        })

        test("Translate Have you met Mrs Kalyani?", done => {
            //done()
        })

        test("Translate Prof Joyner of King's College, London.", done => {
            //done()
        })

        test("Translate Tea time is usually around 4 or 4.30.", done => {
            //done()
        })

    })

    suite("Highlight Translated Text", () => {

        suite("Highlight American to British English", () => {

            test("Highlight translation in Mangoes are my favorite fruit.", done => {
                //done()
            })

            test("Highlight translation in I ate yogurt for breakfast.", done => {
                //done()
            })
        })

        suite("Highlight British to American English", () => {

            test("Highlight translation in We watched the footie match for a while.", done => {
                //done()
            })

            test("Highlight translation in Paracetamol takes up to an hour to work.", done => {
                //done()
            })
        })
    })
})