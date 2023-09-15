import Joi from "joi";

const id = Joi.number();
const employeId = Joi.string();
const role = Joi.number();
const isActive = Joi.boolean();
const timestamp = +new Date();

export const createEmployeSchema = Joi.object({
  id: id.required(),
  employeId: employeId.required(),
  role: role.required(),
});

export const updateEmployeSchema = Joi.object({
  isActive: isActive.required(),
});

export const getEmployeScheme = Joi.object({
  id: id.required(),
});
