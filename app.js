import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

import { router as indexRouter } from "./routes/index.js";
import { router as signinRouter } from "./routes/signin.js";
// app.use("/", indexRouter);
app.use("/", signinRouter);

app.listen(PORT, () => {
  console.log(`server is listenning on ${PORT}`);
});
