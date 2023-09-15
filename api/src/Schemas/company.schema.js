import Joi from "joi";

const id = Joi.number();
const name = Joi.string();
const email = Joi.string();
const phone = Joi.string();
const addres = Joi.string();
const logo = Joi.string();
const timestamp = +new Date();

export const createCompanySchema = Joi.object({
  name: name.optional(),
  email: email.optional(),
  phone: phone.optional(),
  addres: addres.optional(),
  logo: logo.optional(),
});

export const updateCompanySchema = Joi.object({
  name: name.optional(),
  email: email.optional(),
  phone: phone.optional(),
  addres: addres.optional(),
  logo: logo.optional(),
  updated: timestamp,
});

export const getCompanySchema = Joi.object({
  id: id.required(),
});
