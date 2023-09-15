const { Model, DataTypes, Sequelize } = require("sequelize");

const COMPANY_TABLE = "Company";

const CompanySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  address: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  logo: {
    allowNull: true,
    type: DataTypes.STRING,
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

class CompanyClass extends Model {
  // Related other thables
  static associate(models) {
    this.hasMany(models.Employe, {
      as: "employe",
      foreignKey: "employe_id",
    });
  }

  // Config this table in sequelize
  static config(sequelize) {
    return {
      sequelize,
      tableName: COMPANY_TABLE,
      modelName: "Company",
      timestamps: false,
    };
  }
}

module.exports = { COMPANY_TABLE, CompanySchema, CompanyClass };
