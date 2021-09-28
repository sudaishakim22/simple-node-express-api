import { users } from "../data.js";
import { v4 as uuidv4 } from "uuid";

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  console.log(users);

  res.send({
    message: "adding data success",
    data: users,
  });
};
