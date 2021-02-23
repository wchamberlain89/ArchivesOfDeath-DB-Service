const models = require('../db/models');

const Survivor = models.Survivor;

exports.get_all_survivors = async (req, res) => {

  const settlementId = req.query.settlementId;

  if(!settlementId) {
    res.send("Must provide settlementId as a query parameter")
  }
  
  const options = {
    where: {
      settlementId
    }, 
    attributes : { 
      exclude: ['createdAt', 'updatedAt'] 
    },
    include : [
      {
        association: 'attributes',
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'survivorAttributesId', 'survivorId']
        }
      },
      {
        model: models.FightingArt,
        attributes: ['name', 'effect'],
        through: {
          attributes: []
        }
      },
      {
        model: models.Ability,
        attributes: ['name', 'effect'],
        through: {
          attributes: []
        }
      }
    ]
  } 

  const survivors = await Survivor.findAll(options).catch(err => console.log("error is ", err));
  res.json(survivors);
}

findFullSurvivor = async (survivorId) => {
  const options = {
    attributes : { 
      exclude: ['createdAt', 'updatedAt'] 
    },
    include : [
      {
        association: 'attributes',
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'survivorAttributesId', 'survivorId']
        }
      },
      {
        model: models.FightingArt,
        attributes: ['name', 'effect'],
        through: {
          attributes: []
        }
      },
      {
        model: models.Ability,
        attributes: ['name', 'effect'],
        through: {
          attributes: []
        }
      }
    ]
  } 

  return await Survivor.findByPk(survivorId, options).catch(err => console.log("error is ", err));
}

exports.get_survivor = async (req, res) => {
  console.log("attempting to get survivor on server")
  const survivorId = req.params.survivorId

  const survivor = await findFullSurvivor(survivorId);
  
  res.json(survivor)
}


exports.create_survivor = async (req, res) => {
  const settlementId = req.body.settlementId;
  const name = req.body.name;
  const gender = req.body.gender;

  const newSurvivor = await Survivor.create({ settlementId, name, gender });
  const fullNewSurvivor = await findFullSurvivor(newSurvivor.survivorId);
  
  res.json(fullNewSurvivor);
}

exports.create_survivor_fighting_art = async (req, res) => {
  const fightingArtId = req.body.fightingArtId;
  const survivorId = req.params.survivorId;
  console.log("attempting to create fighting art")
  const newSurvivorFightingArt = await models.SurvivorFightingArt.create({ fightingArtId, survivorId });
  res.json(newSurvivorFightingArt);
}