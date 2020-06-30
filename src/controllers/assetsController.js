const models = require('../db/models');

const Resource = models.Resource;
const Gear = models.Gear;

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
