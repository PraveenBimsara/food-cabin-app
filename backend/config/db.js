import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://praveenbimsara99:19991111@cluster0.662pyyu.mongodb.net/food-del').then(()=>console.log('DB Connected'));
}