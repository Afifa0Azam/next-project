
import mongoose from "mongoose";

export function connectKaro() {

    mongoose.connect('mongodb://localhost:27017').then((connect) => {
        console.log(connect)
        console.log("DB connect hogya")
    }).catch((err) => {
        console.log(err);
    });

}