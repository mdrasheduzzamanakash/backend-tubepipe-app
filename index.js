const express = require("express");

const dotenv = require('dotenv')

const cookieParser = require("cookie-parser");

const app = express();

const mongoose = require("mongoose");

const cors = require("cors");



// const createRoute = require("./routes/createPipe");
// const LoginRoute = require("./routes/login");
// const PipeDetailsRoute = require("./routes/pipeDetails");
// const RegisterRoute = require("./routes/register");
// const EnrollRoute = require("./routes/enroll");

const LoginRoute = require('./routes/login.route')
const RegisterRoute = require('./routes/register.route')
// const createRoute = require('./routes/createPipe.route')
// const PipeDetailsRoute = require('./routes/pipeDetails.route')
const EnrollRoute = require('./routes/enroll.route')
const PipeRoute = require('./routes/pipe.route')


dotenv.config()

mongoose.Promise = global.Promise;

mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Database connected sucessfully ");
    })
    .catch((error) => {
        console.log("Database could not connected: " + error);
    });

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use("/api/register", RegisterRoute);

app.use("/api/login", LoginRoute);

app.use("/api/enroll", EnrollRoute);

app.use("/api/pipes", PipeRoute);

app.get("*", (req, res) => {
    res.send("Not-found!");
});

// start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});

app.use((err, req, res, next) => {
    console.log(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
