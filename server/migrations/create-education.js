
const uuid = require('uuid/v4');


module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Education', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: uuid()
        },
        schoolname:{
            type: Sequelize.STRING,
            allowNull: false
        },
        coursename: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        degree: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true,
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Education'),
  };
