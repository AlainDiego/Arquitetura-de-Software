import mongoose, { mongo } from "mongoose";

async function connectToDatabase() {
    mongoose.connect("mongodb+srv://coultalain:5jC5PQattnUZ6uLY@cluster0.ifx2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
};

export default connectToDatabase;