const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the world of microorganisms in the webpage");
    } catch (error) {
        console.error("Error in home route:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// *----------------------------------------------
// * User Registration Logic
// *----------------------------------------------
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email Already Exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });

        res.status(201).json({
            msg: "Registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // ✅ Check if the user is active
        if (!userExist.isActive) {
            return res.status(403).json({ message: "Your account is inactive. Contact admin." });
        }

        const user = await userExist.comparePassword(password);
        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid Email or Password" });
        }
    } catch (error) {
        next(error);
    }
};


// *----------------------------------------------
// * Fetch User Data
// *----------------------------------------------
const user = (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// *----------------------------------------------
// * Fetch User Profile Data
// *----------------------------------------------
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// *----------------------------------------------
// * Toggle User Active/Inactive Status
// *----------------------------------------------
const toggleUserStatus = async (req, res) => {
    const { id } = req.params;
    const { isActive } = req.body;

    try {
        console.log(`Received request to update user ID: ${id} to status: ${isActive}`);

        // ✅ Ensure ID is valid before querying the database
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // ✅ Update the user's status
        user.isActive = isActive;
        await user.save();

        res.json({ message: `User ${isActive ? "Activated" : "Deactivated"} successfully`, user });
    } catch (error) {
        console.error("Error updating user status:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// *----------------------------------------------
// * Exporting All Controllers
// *----------------------------------------------
module.exports = { home, register, login, user, getProfile, toggleUserStatus };
