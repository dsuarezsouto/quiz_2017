'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Sessions',
        {
          id:{
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              unique: true
          },
          username: {
                type: Sequelize.STRING,
                unique: true,
                validate: {
                    notEmpty: {msg: "Falta el username."}
                }
          },
          isAdmin: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
          },
          createdAt: {
                type: Sequelize.DATE,
                allowNull: false
          },
          updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
          }
        },
        {
            sync: {force: true}
        }
    );
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Sessions');

  }
};
