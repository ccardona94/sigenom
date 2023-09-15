import { Router } from "express";

import { UserRouter } from "./users.routes";
import { CompanyRouter } from "./company.routes";

const main = Router();

main.get("/", (req, res) => {
  res.send(`Server in express is runing OK..!`);
});

export const router = (app) => {
  const router = Router();
  app.use("", main);
  app.use("", router);
  router.use("/users", UserRouter);
  router.use("/company", CompanyRouter);
};
