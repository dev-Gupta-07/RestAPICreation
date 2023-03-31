const express = require("express");
const dotenv = require("dotenv");
const Student = require("./models/student");
const connectDb = require("./db/connect");
dotenv.config();
connectDb();
const app = express();

app.use(express.json());

const PORT = process.env.port || 6600;
app.post("/", (req, res) => {
  res.send("Hello");
});
app.post("/sign", (req, res) => {
  const user = new Student({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    password: req.body.password,
  });
  res.send(user);

  user
    .save()
    .then(() => {
      res.status(201).send();
    })
    .catch((e) => {
      throw new Error("Cannot create");
    });
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Student.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.send(user);
    console.log("done it");
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

app.listen(PORT, () => {
  console.log(`Server created at ${PORT}`);
});
