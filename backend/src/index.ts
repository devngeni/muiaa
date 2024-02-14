import express, { Response } from "express";
import {app} from "./config/express.config";



// Universal route handler for unmatched routes
app.use("*", (_, res: Response) => {
  res.status(404).json({ error: "404 - Not Found: The requested resource could not be found on this server." });
});