const models = require('../db/models');

const Settlement = models.Settlement;
const Inventory = models.Inventory;

exports.get_all_settlements = async (req, res) => {
  const options = { 
    attributes : { 
      exclude: ['createdAt', 'updatedAt'] 
    } 
  }
  const settlements = await Settlement.findAll(options);
  res.json(settlements);
}

exports.create_settlement = async (req, res) => {
  const name = req.body.name;
  const newSettlement = await Settlement.create({ name });
  const newInventory = await Inventory.create({ settlementId : newSettlement.settlementId });
  res.json(newSettlement);
}