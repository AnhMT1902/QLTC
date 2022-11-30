import express from "express";
import fileUpload from "express-fileupload"
import mongoose from 'mongoose';
import {router} from "./src/router/router";
import cors from "cors";

const app = express()
app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static('public'));
app.use(express.json())
mongoose.connect('mongodb+srv://Dung:CodeGym%4017t4@cluster0.0cvbdt1.mongodb.net/finance').then(() => {
    console.log('connected')
}).catch((err) => {
    console.log(err)
});
app.use(cors());
app.use('', router)
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.listen(3000, () => {
    console.log('server running localhost 3000');
})
