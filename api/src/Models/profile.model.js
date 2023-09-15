const { Model, DataTypes, Sequelize } = require("sequelize");
const { EMPLOYE_TABLE } = require("./employe.model");

const PROFILE_TABLE = "Profile";

const ProfileSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
    field: "last_name",
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  photo: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  docId: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: "doc_id",
  },
  birthday: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
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
  // FOREINKEYS
  employeId: {
    field: "employe_id",
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: true,
    referemces: { model: EMPLOYE_TABLE, key: "id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
};

class ProfileClass extends Model {
  // Related other thables
  static associate(models) {
    this.belongsTo(models.Employe, { as: "employe" });
  }

  // Config this table in sequelize
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROFILE_TABLE,
      modelName: "Profile",
      timestamps: false,
    };
  }
}

module.exports = { PROFILE_TABLE, ProfileClass, ProfileSchema };
