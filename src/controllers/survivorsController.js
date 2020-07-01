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