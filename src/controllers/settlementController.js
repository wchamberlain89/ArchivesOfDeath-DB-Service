const models = require('../db/models');

const Settlement = models.Settlement;
const SettlementResource = models.SettlementResource;
const SettlementGear = models.SettlementGear;


exports.get_all_settlements = async (req, res) => {
  const options = { 
    attributes : { 
      exclude: ['createdAt', 'updatedAt'] 
    } 
  }
  const settlements = await Settlement.findAll(options);
  res.json(settlements);
};

exports.create_settlement = async (req, res) => {
  const name = req.body.name;
  const newSettlement = await Settlement.create({ name });
  res.json(newSettlement);
};

//SETTLEMENT RESOURCE ENDPOINTS

exports.get_settlement_resources = async (req, res) => {
    const settlementId = req.params.settlementId;
    const options = {
        where: {
            settlementId
        },
        attributes : ['qty', 'resourceId'],
        include: {
          association : "resourceInfo",
          attributes : {
            exclude : ['createdAt', 'updatedAt', 'resourceId']
          },
        }
    }
    let settlementInventory = await SettlementResource.findAll(options)
    res.send(settlementInventory);
};

const fullItemQuery = (settlementId, resourceId) => {
  return ( 
    {
      where : {
      settlementId,
      resourceId
      },
      attributes: ['qty', 'resourceId'],
      include : {
        association : 'resourceInfo',
        attributes : ['name', 'description']
      }
    }
  )
}
//Query option for settlementItem plus iteminfo

exports.add_settlement_resource = async (req, res) => {
    const settlementId = req.params.settlementId;
    const resourceId = parseInt(req.params.resourceId);
    const qty = req.body.qty;
    
    const resource = {
        settlementId, 
        resourceId, 
        qty
    }

    await SettlementResource.create(resource);
    
    const fullResourceInfo = await SettlementResource.findOne(fullItemQuery(settlementId, resourceId));

    res.send(fullResourceInfo);
};

exports.update_settlement_resource = async (req, res) => {
  const settlementId = req.params.settlementId;
  const resourceId = parseInt(req.params.resourceId);
  const qty = req.body.qty;

  const updatedResource = await SettlementResource.update({ qty: qty }, { where: { settlementId, resourceId }, returning: true });
  
  const fullResourceInfo = await SettlementResource.findOne(fullItemQuery(settlementId, resourceId)).catch(err => console.log("Error in update_settlement_resource is ", err));

  res.send(fullResourceInfo);
}

// SETTLEMENT GEAR

exports.get_settlement_gear = async (req, res) => {
  const settlementId = req.params.settlementId;
  const options = {
      where: {
          settlementId
      },
      attributes : ['qty', 'gearId'],
      include: {
        association : "gearInfo",
        attributes : {
          exclude : ['createdAt', 'updatedAt', 'resourceId']
        },
      }
  }
  let settlementGear = await SettlementGear.findAll(options)
  res.send(settlementGear);
};

exports.add_settlement_gear = async (req, res) => {
  const settlementId = req.params.settlementId;
  const gearId = parseInt(req.params.resourceId);
  const qty = req.body.qty;
  
  const resource = {
      settlementId, 
      gearId, 
      qty
  }

  await SettlementResource.create(resource);
  
  const fullResourceInfo = await SettlementResource.findOne(fullItemQuery(settlementId, gearId));

  res.send(fullResourceInfo);
};

exports.update_settlement_gear = async (req, res) => {
  const settlementId = req.params.settlementId;
  const resourceId = parseInt(req.params.resourceId);
  const qty = req.body.qty;

  const updatedResource = await SettlementResource.update({ qty: qty }, { where: { settlementId, resourceId }, returning: true });

  const fullResourceInfo = await SettlementResource.findOne(fullItemQuery(settlementId, resourceId)).catch(err => console.log("Error in update_settlement_resource is ", err));

  res.send(fullResourceInfo);
}