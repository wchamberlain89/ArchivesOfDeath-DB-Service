'use strict';
const axios = require('axios');
const models = require('../models');
const Resource = models.Resource;

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
              description: resource.flavor_text,
              resourceType: resource.sub_type_pretty
            })
            return acc;
          }, []);
        }
      ]
    })
    .then(response => {
      response.data.forEach(resource => (console.log(resource.name)));
      return Resource.bulkCreate(response.data);
    })
    .catch(error => console.log(error));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Resources', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
