'use strict';
const axios = require('axios');
const models = require('../models');
const Gear = models.Gear;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return axios({
      url: 'https://api.kdm-manager.com/game_asset/gear',
      method: 'get',
      transformResponse: [
        response => {
          const gear = JSON.parse(response);
          
          return Object.values(gear).reduce((acc, gear, index) => {
            acc.push({
              name: gear.name, 
              description: gear.flavor_text})
            return acc;
          }, []);
        }
      ]
    })
    .then(response => {
      response.data.forEach(gear => (console.log(gear.name)));
        
      return Gear.bulkCreate(response.data);
    })
    .catch(error => console.log(error));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Gear', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};