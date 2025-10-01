const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1:27017/mern_admin";
//mongoose.connect(URI);
//const URI = "mongodb+srv://mayurrajsisodiya:mayurraj@cluster1.aae5y.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster1";
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful to Database");
    } catch (error) {
        console.error("Database Connection Failed");
        process.exit(0);
    }
};

module.exports = connectDb;
