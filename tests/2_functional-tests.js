const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
let translate = new Translator()

suite("Functional Tests", () => {

    suite("POST to '/api/translate'", () => {

        test("Translation with text and locale fields", done => {
            chai.request(server)
                .post('/api/translate/')
                .send({
                    locale: "american-to-british",
                    text: "Lunch is at 12:15 today."
                })
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.equal(res.body.text, "Lunch is at 12:15 today.")
                    assert.equal(res.body.translation, 'Lunch is at <span class="highlight">12.15</span> today.')
                    done()
                })
        })

        test("Translation with text and invalid locale field", done => {
            chai.request(server)
                .post('/api/translate/')
                .send({
                    locale: "italian-to-british",
                    text: "Lunch is at 12:15 today."
                })
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.equal(res.body.error, "Invalid value for locale field")
                    done()
                })
        })

        test("Translation with missing text field", done => {
            chai.request(server)
                .post('/api/translate/')
                .send({
                    locale: "american-to-british",
                    text: ""
                })
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.equal(res.body.error, "No text to translate")
                    done()
                })
        })

        test("Translation with missing locale field", done => {
            chai.request(server)
                .post('/api/translate/')
                .send({
                    locale: "",
                    text: "Lunch is at 12:15 today."
                })
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.equal(res.body.error, "Required field(s) missing")
                    done()
                })
        })

        test("Translation with empty text", done => {
            chai.request(server)
                .post('/api/translate/')
                .send({
                    locale: "american-to-british",
                    text: undefined
                })
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.equal(res.body.error, "Required field(s) missing")
                    done()
                })
        })

        test("Translation with text that needs no translation", done => {
            chai.request(server)
                .post('/api/translate/')
                .send({
                    locale: "british-to-american",
                    text: "Lunch is at 12:15 today."
                })
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.equal(res.body.text, "Lunch is at 12:15 today.")
                    assert.equal(res.body.translation, 'Lunch is at <span class="highlight">12:15</span> today.')
                    done()
                })
        })
    })
})