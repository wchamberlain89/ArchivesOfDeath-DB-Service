'use strict';
const axios = require('axios');
const models = require('../models');
const Item = models.Item;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return axios({
      url: 'https://api.kdm-manager.com/game_asset/resources',
      method: 'get',
      transformResponse: [
        response => {
          const resources = JSON.parse(response);
          
          return Object.values(resources).reduce((acc, resource, index) => {
            acc.push({
              name: resource.name, 
              description: resource.flavor_text})
            return acc;
          }, []);
        }
      ]
    })
    .then(response => {
      response.data.forEach(item => (console.log(item.name)));
      return Item.bulkCreate(response.data);
    })
    .catch(error => console.log(error));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
