'use strict';
const axios = require('axios');
const models = require('../models');
const Impairment = models.Impairment;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return axios({
      url: 'https://api.kdm-manager.com/game_asset/abilities_and_impairments',
      method: 'get',
      transformResponse: [
        response => {
          const ability = JSON.parse(response);
          
          return Object.values(ability).reduce((acc, ability, index) => {
            if(ability.sub_type === 'impairment') {
              acc.push({
                name: ability.name, 
                effect: ability.desc
              });
            }
            return acc;
          }, []);
        }
      ]
    })
    .then(response => {
      response.data.forEach(ability => (console.log(ability)));
        
      return Impairment.bulkCreate(response.data);
    })
    .catch(error => console.log(error));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Impairments', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
