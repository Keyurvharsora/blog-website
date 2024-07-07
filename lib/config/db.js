import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://keyurharsora09:jMuENiriSFpwxQxu@cluster0.5a69avh.mongodb.net/blog-app');
}
