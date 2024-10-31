import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "../api/routes/auth.route.js"; 
import postRoute from "../api/routes/post.route.js";
import userRoute from "../api/routes/user.route.js";

const app = express();

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute); 

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
