
const uuid = require('uuid/v4');

module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: uuid()
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('User'),
  };