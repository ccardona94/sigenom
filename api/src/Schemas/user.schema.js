import Joi from "joi";
import {
  createProfileSchema,
  updateProfileScheme,
  getProfileScheme,
} from "./profile.schema";
import {
  createRoleSchema,
  updateRoleSchema,
  getRoleSchema,
} from "./role.schema";

const id = Joi.number();
const email = Joi.string();
const password = Joi.string();
const isActive = Joi.boolean();
const isAdmin = Joi.boolean();
const timestamp = +new Date();

export const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  isActive: isActive.optional(),
  isAdmin: isAdmin.optional(),
});

export const updateUserSchema = Joi.object({
  password: password.optional(),
  isActive: isActive.optional(),
  isAdmin: isAdmin.optional(),
});

export const getUserSchema = Joi.object({
  id: id.required(),
});
