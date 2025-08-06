const mongoose = require("mongoose");

const connectDB = async (URL) => {
    try {
        await mongoose.connect(URL, {
         
            // Optional: Use these options for better error handling
           
        });
        console.log("Database is successfully connected");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = { connectDB };
