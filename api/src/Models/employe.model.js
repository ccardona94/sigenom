const { Model, DataTypes, Sequelize } = require("sequelize");
const { COMPANY_TABLE } = require("./company.model");

const EMPLOYE_TABLE = "Employe";

const EmployeSchema = {
  EmployeId: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
    field: "employe_id",
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  isActive: {
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
  // FOREINKEYS
  companyId: {
    field: "company_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    referemces: { model: COMPANY_TABLE, key: "id" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
};

class EmployeClass extends Model {
  // Related other thables
  static associate(models) {
    this.hasOne(models.Profile, {
      as: "profile",
      foreignKey: "employeId",
    });

    this.belongsTo(models.Company, { as: "company" });
  }

  // Config this table in sequelize
  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPLOYE_TABLE,
      modelName: "Employe",
      timestamps: false,
    };
  }
}

module.exports = { EMPLOYE_TABLE, EmployeClass, EmployeSchema };
