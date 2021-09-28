import express from "express";
import { createUser } from "../controllers/userController.js";
import { users } from "../data.js";

const router = express.Router();

// all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", createUser);

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const findUserById = users.find((user) => user.id === id);

  res.send(findUserById);
});

router.delete("/:id", (req, res) => {
  const deleteId = req.params.id;

  users = users.filter((user) => user.id !== deleteId);

  res.send({
    message: "delete user by id success",
    data: users,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send({
    message: "update succes",
    data: user,
  });
});

export default router;
