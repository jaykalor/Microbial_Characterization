const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    text: { type: String, required: true },
    type: { type: String, enum: ["user", "bot"], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chat", chatSchema);
