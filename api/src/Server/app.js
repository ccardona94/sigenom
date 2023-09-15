import express from "express";
import { vars } from "../config";
import { router } from "../Routes/router";
import {
  logErrors,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} from "../middlewares/errorHandler.middleware";

export const app = express();

//Settings
app.set("port", vars.appPort);

// Express Middleware
app.use(express.json()); // This config is for express read JSON
app.use(express.urlencoded({ extended: true }));

// Routes
router(app);

// Custom Middleware
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Statics
app.use(express.static(__dirname + "/public"));
