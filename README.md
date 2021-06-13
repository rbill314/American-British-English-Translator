# American-British-English-Translator

Free Code Camp American-British-English-Translator 5/16/2021

Coded with VSCode and submitted thru Replit

Write the following tests in tests/1_unit-tests.js:

Translate Mangoes are my favorite fruit. to British English
Translate I ate yogurt for breakfast. to British English
Translate We had a party at my friend's condo. to British English
Translate Can you toss this in the trashcan for me? to British English
Translate The parking lot was full. to British English
Translate Like a high tech Rube Goldberg machine. to British English
Translate To play hooky means to skip class or work. to British English
Translate No Mr. Bond, I expect you to die. to British English
Translate Dr. Grosh will see you now. to British English
Translate Lunch is at 12:15 today. to British English
Translate We watched the footie match for a while. to American English
Translate Paracetamol takes up to an hour to work. to American English
Translate First, caramelise the onions. to American English
Translate I spent the bank holiday at the funfair. to American English
Translate I had a bicky then went to the chippy. to American English
Translate I've just got bits and bobs in my bum bag. to American English
Translate The car boot sale at Boxted Airfield was called off. to American English
Translate Have you met Mrs Kalyani? to American English
Translate Prof Joyner of King's College, London. to American English
Translate Tea time is usually around 4 or 4.30. to American English
Highlight translation in Mangoes are my favorite fruit.
Highlight translation in I ate yogurt for breakfast.
Highlight translation in We watched the footie match for a while.
Highlight translation in Paracetamol takes up to an hour to work.
Write the following tests in tests/2_functional-tests.js:

Translation with text and locale fields: POST request to /api/translate
Translation with text and invalid locale field: POST request to /api/translate
Translation with missing text field: POST request to /api/translate
Translation with missing locale field: POST request to /api/translate
Translation with empty text: POST request to /api/translate
Translation with text that needs no translation: POST request to /api/translate

User Stories

I can provide my own project, not the example URL.

Passed
You can POST to /api/translate with a body containing text with the text to translate and locale with either american-to-british or british-to-american. The returned object should contain the submitted text and translation with the translated text.

Passed
The /api/translate route should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English. The span element should wrap the entire time string, i.e. <span class="highlight">10:30</span>.

Passed
The /api/translate route should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English. See /public/american-to-british-titles.js for the different titles your application should handle.

Passed
Wrap any translated spelling or terms with <span class="highlight">...</span> tags so they appear in green.

Passed
If one or more of the required fields is missing, return { error: 'Required field(s) missing' }.

Passed
If text is empty, return { error: 'No text to translate' }

Passed
If locale does not match one of the two specified locales, return { error: 'Invalid value for locale field' }.

Passed
If text requires no translation, return "Everything looks good to me!" for the translation value.

Passed
All 24 unit tests are complete and passing. See /tests/1_unit-tests.js for the expected behavior you should write tests for.

All 6 functional tests are complete and passing. See /tests/2_functional-tests.js for the functionality you should write tests for.
