import { models } from "../DB/connection";
import bcrypt from "bcryptjs";

export class UserService {
  // Create a new user in the database
  async create(body) {
    let pass_hash = await bcrypt.hash(body.password, 16);
    body.password = pass_hash;
    const user = await models.User.create(body);
    return user;
  }
  // Get all users in the database
  async getAll() {
    const users = await models.User.findAll();
    return users;
  }
}
