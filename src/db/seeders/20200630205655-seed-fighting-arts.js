'use strict';
const axios = require('axios');
const models = require('../models');
const FightingArt = models.FightingArt;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return axios({
      url: 'https://api.kdm-manager.com/game_asset/fighting_arts',
      method: 'get',
      transformResponse: [
        response => {
          const fightingArt = JSON.parse(response);
          
          return Object.values(fightingArt).reduce((acc, fightingArt, index) => {
            console.log("Fighting Art is -", fightingArt);
            acc.push({
              name: fightingArt.name, 
              effect: fightingArt.desc
            })
            return acc;
          }, []);
        }
      ]
    })
    .then(response => {
      response.data.forEach(fightingArt => (console.log(fightingArt)));
        
      return FightingArt.bulkCreate(response.data);
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
