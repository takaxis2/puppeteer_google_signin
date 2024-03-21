export function hello(req, res) {
  res.send("hello world 3");
}
// import User, { find, findById } from "../models/User";

// export async function getAllUsers(req, res) {
//   try {
//     const users = await find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }
// export async function getUserById(req, res) {
//   try {
//     const user = await findById(req.params.id);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }
// export async function createUser(req, res) {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }
// export async function updateUser(req, res) {
//   try {
//     const user = await findById(req.params.id);
//     if (user) {
//       user.name = req.body.name || user.name;
//       user.email = req.body.email || user.email;
//       const updatedUser = await user.save();
//       res.json(updatedUser);
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }
// export async function deleteUser(req, res) {
//   try {
//     const user = await findById(req.params.id);
//     if (user) {
//       await user.remove();
//       res.json({ message: "User deleted" });
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }
