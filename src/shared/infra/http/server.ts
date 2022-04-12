import express from "express";
import "reflect-metadata";

import { passwordRoutes } from "./routes/passwords.routes";

const app = express();

app.use(express.json());

app.use("/passwords", passwordRoutes);

app.listen(3333, () => { console.log("Server is running")});