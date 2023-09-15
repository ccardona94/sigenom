import { Router } from "express";

import { UserService } from "../Services/users.service";
import { validatorHandler } from "../middlewares/validatorHandler";
import { createUserSchema } from "../Schemas/user.schema";

const service = new UserService();

export const UserRouter = Router();

// GET
UserRouter.get("", async (req, res) => {
  const users = await service.getAll();
  res.status(200).json(users);
});

// POST
UserRouter.post(
  "",
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const user = await service.create(body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);
