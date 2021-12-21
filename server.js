const express = require("express");
const app = express();
var user = [
  { id: 0, name: "avatar1", age: 40 },
  { id: 1, name: "avatar2", age: 30 },
  { id: 2, name: "avatar3", age: 10 },
];
app.use(express.json());
app.get("/user", (req, res) => {
  res.send({ msg: "list of users", user });
});
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  Oneuser = user.find((el) => el.id == id);

  res.send({ msg: "id by user", Oneuser });
});
app.post("/user", (req, res) => {
  const h = [...user, req.body];

  res.send({ msg: "Please add", h });
});
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  user = user.map((el) => (el.id == id ? { ...el, ...req.body } : el));
  res.send({ msg: "update", user });
});
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  user = user.filter((el) => el.id != id);
  res.send({ msg: "user deleted successfully", user });
});
const port = 5000;
app.listen(port, () => console.log(`${port}`));
