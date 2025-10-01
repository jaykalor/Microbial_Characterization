// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const app = express();

// // Import Routes
// const authRoute = require("./router/auth-router");
// const contactRoute = require("./router/contact-router");
// const serviceRoute = require("./router/service-router");
// const adminRouter = require("./router/admin-router");
// const chatbotRouter = require("./router/chatbot-router");

// // Import Database Connection and Error Middleware
// const connectDb = require("./utils/db");
// const errorMiddleware = require("./middlewares/error-middleware");

// // Middleware
// app.use(express.json());

// // CORS Configuration
// const corsOptions = {
//     origin: process.env.FRONTEND_URL || "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
//     credentials: true,
// };
// app.use(cors(corsOptions));

// // Define Routes
// app.use("/api/auth", authRoute);
// app.use("/api/contact", contactRoute);
// app.use("/api/service", serviceRoute); // ✅ Fixed route name
// app.use("/api/admin", adminRouter);
// app.use("/api/chatbot", chatbotRouter);

// // Global Error Handling Middleware
// app.use(errorMiddleware);

// const PORT = process.env.PORT || 5000;

// // Connect to Database and Start Server
// connectDb()
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Server is running at PORT: ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error("Database connection failed:", error);
//         process.exit(1);
//     });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRouter = require("./router/admin-router");
const chatbotRouter = require("./router/chatbot-router");

const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/auth", authRoute);
app.use("/api/contact", contactRoute);
app.use("/api/service", serviceRoute);
app.use("/api/admin", adminRouter);
app.use("/api/chatbot", chatbotRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
        process.exit(1);
    });
