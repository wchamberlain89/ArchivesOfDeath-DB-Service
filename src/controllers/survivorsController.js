const models = require('../db/models');

const Survivor = models.Survivor;

exports.get_all_survivors = async (req, res) => {
  const options = { 
    attributes : { 
      exclude: ['createdAt', 'updatedAt'] 
    },
    include : {
      association: 'attributes',
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'survivorAttributesId', 'survivorId']
      }
    } 
  }
  const survivors = await Survivor.findAll(options).catch(err => console.log("error is ", err));
  res.json(survivors);
};

exports.create_survivor = async (req, res) => {
  const settlementId = req.params.settlementId;
  const name = req.body.name;
  const gender = req.body.gender;

  console.log("settlementId", settlementId);
  console.log("name", name);
  console.log("gender", gender);

  const newSurvivor = await Survivor.create({ settlementId, name, gender });
  res.json(newSurvivor);
}