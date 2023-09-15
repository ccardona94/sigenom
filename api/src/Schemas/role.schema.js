import Joi from "joi"

const id = Joi.number()
const role = Joi.string()
const timestamp = +new Date()

export const createRoleSchema = Joi.object({
  role: role.optional(),
})

export const updateRoleSchema = Joi.object({
  role: role.optional(),
  updated: timestamp
})

export const getRoleSchema = Joi.object({
  id: id.required()
})