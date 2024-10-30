import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "../api/routes/auth.route.js"; 
import postRoute from "../api/routes/post.route.js";

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute); 

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});