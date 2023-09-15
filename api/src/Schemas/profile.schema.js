import Joi from "joi";

const id = Joi.number();
const name = Joi.string();
const lastName = Joi.string();
const addres = Joi.string();
const photo = Joi.string();
const phone = Joi.string();
const docId = Joi.string();
const birthday = Joi.date();
const timestamp = +new Date();

export const createProfileSchema = Joi.object({
  name: name.optional(),
  lastName: lastName.optional(),
  addres: addres.optional(),
  photo: photo.optional(),
  phone: phone.optional(),
  birthday: birthday.optional(),
  docId: docId.optional(),
});

export const updateProfileScheme = Joi.object({
  name: name.optional(),
  lastName: lastName.optional(),
  addres: addres.optional(),
  photo: photo.optional(),
  phone: phone.optional(),
  birthday: birthday.optional(),
  docId: docId.optional(),
  updated: timestamp,
});

export const getProfileScheme = Joi.object({
  id: id.required(),
});
