'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'tips',
            'authorId',
            {type: Sequelize.INTEGER},
            {
                sync: {force: true}
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('tips', 'authorId');
    }
};