const express = require("express");
const userRoute = require("./ROUTER/regRouter");
const { connectDB } = require("../BackendAmazon/CONNECTION/connect");
const cors = require("cors");
const errorHandler = require("./MIDDLEWARE/errorHandler");
const notFound = require("./MIDDLEWARE/notFound");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/ecommerce",userRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT||5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log("Database is successfully connected");

        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

start();



const session = require('express-session');

app.use(session({
    secret: 'yourSecretKey', // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { 
        domain: '.example.com', // Allows sharing across all subdomains of example.com
        secure: true,            // Ensures cookie is only sent over HTTPS (set to true if using HTTPS)
        httpOnly: true,          // Prevents JavaScript from accessing the cookie
        sameSite: 'Lax',         // Helps protect against CSRF attacks
        maxAge: 24 * 60 * 60 * 1000 // Sets expiration to 1 day
    }
}));

