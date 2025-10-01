const chatbotMiddleware = (req, res, next) => {
    console.log("Chatbot Middleware Activated");

    // Validate request: Check if user sent a message
    if (!req.body.message) {
        return res.status(400).json({ error: "Message is required!" });
    }

    // Log the incoming request
    console.log(`User: ${req.body.message}`);

    // Attach a timestamp to the request
    req.chatbotData = { timestamp: new Date().toISOString() };

    next(); // Pass control to the chatbot controller
};

module.exports = chatbotMiddleware;
