const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Service = require("../models/service-model");

/*-------------------------------------------
----------- Get All Users (Admin) -----------
---------------------------------------------*/
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 }); // Exclude password field

        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        next(error);
    }
};

/*----------------------------------------------
----------- Get Single User (Admin) ------------
------------------------------------------------*/
const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id, { password: 0 });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(`Error fetching user with ID ${req.params.id}:`, error);
        next(error);
    }
};

/*----------------------------------------------
----------- Update User (Admin) ----------------
------------------------------------------------*/
const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateUserData = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, updateUserData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error(`Error updating user with ID ${req.params.id}:`, error);
        next(error);
    }
};

/*----------------------------------------------
------ Activate/Deactivate User (Admin) -------
------------------------------------------------*/
const updateUserStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;

        if (typeof isActive !== "boolean") {
            return res.status(400).json({ message: "Invalid request. 'isActive' must be true or false." });
        }

        const updatedUser = await User.findByIdAndUpdate(id, { isActive }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: `User ${isActive ? "activated" : "deactivated"} successfully`, user: updatedUser });
    } catch (error) {
        console.error(`Error updating status for user ID ${req.params.id}:`, error);
        next(error);
    }
};

/*----------------------------------------------
----------- Delete User (Admin) ----------------
------------------------------------------------*/
const deleteUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(`Error deleting user with ID ${req.params.id}:`, error);
        next(error);
    }
};

/*----------------------------------------------
----------- Get All Contacts (Admin) -----------
------------------------------------------------*/
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
        }

        return res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        next(error);
    }
};

/*----------------------------------------------
----------- Delete Contact (Admin) -------------
------------------------------------------------*/
const deleteContactById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error(`Error deleting contact with ID ${req.params.id}:`, error);
        next(error);
    }
};

/*----------------------------------------------
----------- Update Service (Admin) -------------
------------------------------------------------*/
const updateService = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedService) {
            return res.status(404).json({ message: "Service not found" });
        }

        return res.status(200).json({ message: "Service updated successfully", service: updatedService });
    } catch (error) {
        console.error(`Error updating service with ID ${req.params.id}:`, error);
        next(error);
    }
};

/*----------------------------------------------
----------- Delete Service (Admin) -------------
------------------------------------------------*/
const deleteService = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedService = await Service.findByIdAndDelete(id);

        if (!deletedService) {
            return res.status(404).json({ message: "Service not found" });
        }

        return res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        console.error(`Error deleting service with ID ${req.params.id}:`, error);
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    updateUserStatus, 
    deleteUserById,
    getAllContacts,
    deleteContactById,
    updateService, // ✅ Added Service Update
    deleteService  // ✅ Added Service Delete
};
