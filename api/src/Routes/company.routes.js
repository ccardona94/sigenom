import { Router } from "express";

import {} from "../Services/company.service";
import { validatorHandler } from "../middlewares/validatorHandler";
import { createCompanySchema } from "../Schemas/company.schema";

// const service =

export const CompanyRouter = Router();

// GET
CompanyRouter.get("", async (req, res) => {
  res.status(200).send("Get all companies");
  // const users = await service.getAll();
  // res.status(200).json(users);
});

// POST
CompanyRouter.post(
  "",
  // validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  }
);
