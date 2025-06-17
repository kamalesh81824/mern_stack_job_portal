require('dotenv').config();
const mongoose = require('mongoose');

const databaseConnection = () => {
    if (!process.env.MONGO_URI) {
        console.error("Database URI is missing! Check your .env file.");
        return;
    }

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data) => {
        console.log(`Database connected successfully at server ${data.connection.host}`);
    }).catch((err) => {
        console.error("Database connection failed:", err);
    });
};

module.exports = databaseConnection;
