"use strict";

const { COMPANY_TABLE, CompanySchema } = require("../../Models/company.model");
const { EMPLOYE_TABLE, EmployeSchema } = require("../../Models/employe.model");
const { PROFILE_TABLE, ProfileSchema } = require("../../Models/profile.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(COMPANY_TABLE, CompanySchema);
    await queryInterface.createTable(EMPLOYE_TABLE, EmployeSchema);
    await queryInterface.createTable(PROFILE_TABLE, ProfileSchema);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(COMPANY_TABLE);
    await queryInterface.dropTable(EMPLOYE_TABLE);
    await queryInterface.dropTable(PROFILE_TABLE);
  },
};
