import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://praveenbimsara99:19991111@cluster0.662pyyu.mongodb.net/food-del?retryWrites=true&w=majority').then(()=>console.log('DB Connected'));
}