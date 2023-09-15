import { UserSchema, UserClass } from "./user.model";
import { CompanySchema, CompanyClass } from "./company.model";
import { EmployeSchema, EmployeClass } from "./employe.model";
import { ProfileSchema, ProfileClass } from "./profile.model";

export function setUpModels(sequelize) {
  // Init a table
  UserClass.init(UserSchema, UserClass.config(sequelize));
  CompanyClass.init(CompanySchema, CompanyClass.config(sequelize));
  EmployeClass.init(EmployeSchema, EmployeClass.config(sequelize));
  ProfileClass.init(ProfileSchema, ProfileClass.config(sequelize));
  // Associate Table
  UserClass.associate(sequelize.models);
  CompanyClass.associate(sequelize.models);
  EmployeSchema.associate(sequelize.models);
  ProfileSchema.associate(sequelize.models);
}
