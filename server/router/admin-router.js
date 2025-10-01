const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

// 🟢 User Management Routes
router.route("/users")
    .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router.route("/users/:id")
    .get(authMiddleware, adminMiddleware, adminController.getUserById)
    .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router.route("/users/update/:id")
    .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router.route("/users/status/:id") // ✅ Activate/Deactivate User
    .patch(authMiddleware, adminMiddleware, adminController.updateUserStatus);

// 🟢 Contact Management Routes
router.route("/contacts")
    .get(authMiddleware, adminController.getAllContacts);

router.route("/contacts/:id")
    .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

// 🟢 Service Management Routes
router.route("/services/:id")
    .put(authMiddleware, adminMiddleware, adminController.updateService)  // ✅ Edit service (PUT)
    .delete(authMiddleware, adminMiddleware, adminController.deleteService); // ✅ Delete service (DELETE)

module.exports = router;
