
const uuid = require('uuid/v4');


module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Address', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: uuid()
        },
        addressLine1:{
            type: Sequelize.STRING,
            allowNull: true
        },
        addressLine2: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        postCode: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        userId : {
            type : Sequelize.UUID,
            onDelete : 'CASCADE',
            references : {
                model : 'User',
                key : 'id',
                as : 'userId'
            },
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Address'),
  };
