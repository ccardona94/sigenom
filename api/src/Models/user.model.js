const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "Users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    min: 6,
  },
  isActive: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: "is_active",
  },
  isAdmin: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: "is_active",
  },
  created: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "created",
    defaultValue: Sequelize.NOW,
  },
  updated: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "updated",
  },
};

class UserClass extends Model {
  // Related other tables
  static associate(models) {
    this.hasMany();
  }

  // Config this table in sequelize
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, UserClass };
