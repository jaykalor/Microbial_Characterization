// const Service = require("../models/service-model");

// // ✅ Fetch all services
// const getAllServices = async (req, res) => {
//     try {
//         const services = await Service.find();
//         if (!services.length) {
//             return res.status(404).json({ msg: "No services found" });
//         }
//         res.status(200).json({ services });
//     } catch (error) {
//         console.error("Error fetching services:", error);
//         res.status(500).json({ msg: "Internal Server Error" });
//     }
// };

// // ✅ Update a service
// const updateService = async (req, res) => {
//     try {
//         const { id } = req.params;  // Get ID from URL
//         const updateData = req.body; // Get updated data from request

//         if (!id) {
//             return res.status(400).json({ error: "Service ID is required" });
//         }

//         const updatedService = await Service.findByIdAndUpdate(id, updateData, { new: true });

//         if (!updatedService) {
//             return res.status(404).json({ error: "Service not found" });
//         }

//         res.json({ message: "Service updated successfully", updatedService });
//     } catch (error) {
//         console.error("Update Error:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// // ✅ Delete a service
// const deleteService = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedService = await Service.findByIdAndDelete(id);

//         if (!deletedService) {
//             return res.status(404).json({ msg: "Service not found" });
//         }

//         res.status(200).json({ msg: "Service deleted successfully" });
//     } catch (error) {
//         console.error(`Error deleting service with ID ${id}:`, error);
//         res.status(500).json({ msg: "Server Error" });
//     }
// };

// module.exports = { getAllServices, updateService, deleteService };

const Service = require("../models/service-model");

// ✅ Fetch all services
const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        if (!services.length) {
            return res.status(404).json({ msg: "No services found" });
        }
        res.status(200).json({ services });
    } catch (error) {
        console.error("Error fetching services:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// ✅ Update a service
const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) {
            return res.status(400).json({ error: "Service ID is required" });
        }

        const updatedService = await Service.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedService) {
            return res.status(404).json({ error: "Service not found" });
        }

        res.json({ message: "Service updated successfully", updatedService });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ✅ Delete a service
const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await Service.findByIdAndDelete(id);

        if (!deletedService) {
            return res.status(404).json({ msg: "Service not found" });
        }

        res.status(200).json({ msg: "Service deleted successfully" });
    } catch (error) {
        console.error(`Error deleting service with ID ${id}:`, error);
        res.status(500).json({ msg: "Server Error" });
    }
};

module.exports = { getAllServices, updateService, deleteService };
