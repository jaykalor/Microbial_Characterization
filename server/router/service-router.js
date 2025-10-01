// const express = require("express");
// const { getAllServices, updateService, deleteService } = require("../controller/service-controller");
// const adminMiddleware = require("../middlewares/admin-middleware");
// const verifyToken = require("../middlewares/service.middlewar");

// const router = express.Router();

// router.get("/",verifyToken, getAllServices); // ✅ Fetch all services correctly
// router.put("/service/:id", adminMiddleware,verifyToken, updateService); // ✅ Updated to match frontend fetch
// router.delete("/:id", adminMiddleware,verifyToken, deleteService); // ✅ Consistent route

// module.exports = router;

const express = require("express");
const { getAllServices, updateService, deleteService } = require("../controller/service-controller");
const adminMiddleware = require("../middlewares/admin-middleware");
const verifyToken = require("../middlewares/service-middlewar");

const router = express.Router();

router.get("/", verifyToken, getAllServices);
router.put("/:id", adminMiddleware, verifyToken, updateService);  // ✅ Fixed route path
router.delete("/:id", adminMiddleware, verifyToken, deleteService);  // ✅ Fixed route path

module.exports = router;
