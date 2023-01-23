const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/', async (req, res) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: req.body.prompt,
            temperature: 0.5,
            max_tokens: 100
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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`
            }
        });

        res.send(response.data.choices[0].text);
    } catch (error) {
        console.log(error);
        res.end('Error generating text')
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
