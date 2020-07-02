const models = require('../db/models');

const FightingArt = models.FightingArt;
const Gear = models.Gear;
const Resource = models.Resource;

exports.get_all_resources = async (req, res) => {
  const options = {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
  }
  const items = await Resource.findAll(options)
  res.json(items);
}

exports.get_all_gear = async (req, res) => {
  const options = {
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  }
  const gear = await Gear.findAll(options);
  res.json(gear);
}

exports.get_all_fighting_arts = async (req, res) => {
  const options = {
    attributes : {
      exclude: ['createdAt', 'updatedAt']
    }
  }
  const fightingArts = await FightingArt.findAll(options)
  res.json(fightingArts);
}
