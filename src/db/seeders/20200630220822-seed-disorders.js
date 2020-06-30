'use strict';
const axios = require('axios');
const models = require('../models');
const Disorder = models.Disorder;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return axios({
      url: 'https://api.kdm-manager.com/game_asset/disorders',
      method: 'get',
      transformResponse: [
        response => {
          const disorder = JSON.parse(response);
          
          return Object.values(disorder).reduce((acc, disorder, index) => {
            console.log("Fighting Art is -", disorder);
            acc.push({
              name: disorder.name, 
              effect: disorder.survivor_effect
            })
            return acc;
          }, []);
        }
      ]
    })
    .then(response => {
      response.data.forEach(disorder => (console.log(disorder)));
        
      return Disorder.bulkCreate(response.data);
    })
    .catch(error => console.log(error));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FightingArts', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
