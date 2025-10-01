const express = require("express");
const Chat = require("../models/chat-model"); // Import Chat model
const chatbotMiddleware = require("../middlewares/chatbot-middleware"); // Import middleware

const router = express.Router();

// POST route to handle chatbot messages
router.post("/", chatbotMiddleware, async (req, res) => {
    const { message } = req.body;

    try {
        // Store user message in MongoDB
        const userMessage = new Chat({ text: message, type: "user" });
        await userMessage.save();

        // Generate a bot response (static response for now)
        let botReply = "Hello! How can I help you?"; // Replace with AI logic if needed

        // Basic AI logic (expand this as needed)
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes("hi") || lowerMessage.includes("hello")) {
            botReply = "Hi there! How can I assist you today?";
        } else if (lowerMessage.includes("help")) {
            botReply = "Sure! What do you need help with?";
        } else if (lowerMessage.includes("bye")) {
            botReply = "Goodbye! Have a great day!";
        }

        // Store bot response in MongoDB
        const botMessage = new Chat({ text: botReply, type: "bot" });
        await botMessage.save();

        res.json({ reply: botReply });
    } catch (error) {
        console.error("Chatbot error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
