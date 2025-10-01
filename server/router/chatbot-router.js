const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/chatbot", async (req, res) => {
    const { message } = req.body;

    try {
        // Replace with your chatbot API (e.g., OpenAI, Dialogflow)
        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        }, {
            headers: { "Authorization": `Bearer YOUR_OPENAI_API_KEY` }
        });

        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: "Error processing chatbot response" });
    }
});

module.exports = router;
