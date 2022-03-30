const express = require("express");
const app = express();
const shirtsRouter = require('./routes/shirts');
const usersRouter = require("./routes/users");
const port = process.env.PORT || 4001;

app.use(express.json());
app.use("/users", usersRouter);
app.use("shirts", shirtsRouter);


app.get("/default", (req, res) => {
    res.send("Welcome to our server!");
});


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});

