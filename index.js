const express = require("express");
const app = express();
const shirtsRouter = require("./routes/shirts");
const usersRouter = require("./routes/user");
const orderDetailsRouter = require("./routes/orderDetails");
const port = process.env.PORT || 4001;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());

app.use(express.static("public"));
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use("/users", usersRouter);
app.use("/shirts", shirtsRouter);
app.use("/orderDetails", orderDetailsRouter);
// app.use("/auth", authRouter)

app.get("/default", (req, res) => {
  res.send("Welcome to our server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended: false}))
