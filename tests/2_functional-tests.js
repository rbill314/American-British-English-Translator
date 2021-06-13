const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite("Functional Tests", () => {

    suite("POST to '/api/translate'", () => {

        test("Translation with text and locale fields", done => {
            chai.request(server)
                .post('/api/translate/')
                .send()
                .end((err, res) => {
                    //done()
                })
        })

        test("Translation with text and invalid locale field", done => {
            chai.request(server)
                .post('/api/translate/')
                .send()
                .end((err, res) => {
                    //done()
                })
        })

        test("Translation with missing text field", done => {
            chai.request(server)
                .post('/api/translate/')
                .send()
                .end((err, res) => {
                    //done()
                })
        })

        test("Translation with missing locale field", done => {
            chai.request(server)
                .post('/api/translate/')
                .send()
                .end((err, res) => {
                    //done()
                })
        })

        test("Translation with empty text", done => {
            chai.request(server)
                .post('/api/translate/')
                .send()
                .end((err, res) => {
                    //done()
                })
        })

        test("Translation with text that needs no translation", done => {
            chai.request(server)
                .post('/api/translate/')
                .send()
                .end((err, res) => {
                    //done()
                })
        })
    })
})