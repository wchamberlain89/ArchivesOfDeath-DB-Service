const models = require('./db/models');
const Inventory = models.Inventory;
const Settlement = models.Settlement;
const InventoryItem = models.InventoryItem;
const Item = models.Item;

// Settlement.hasOne(Inventory, {
//   foreignKey: 'settlementId'
// });

// Settlement.create({
//   name: "Pillar of Light"
// })
// .then(newSettlement => {
//   console.log(newSettlement.get())
// })
// .catch(err => {
//   console.error("Error creating settlement", err)
// })

// Inventory.create({
//   settlementId: 1
// })
// .then(newInventory => {
//   console.log(newInventory.get())
// })
// .catch(err => {
//   console.error("Error creating inventory", err)
// })

// Item.bulkCreate([
//   {name: "Bone Sword", description: "A sword made of bone."},
//   {name: "Bone Spear", description: "A spear made of bone."},
//   {name: "Bone Axe", description: "An axe made of bone."},
// ])
// .then((newItems) => {
//   console.log(newItems);
// })
// .catch(err => {
//   console.error("Error creating Items");
// })

// Settlement.findOne({
//   where: {settlementId: 1}, include: 'Inventory'
// })
// .then((res) => {
//   console.log(res.Inventory.dataValues);
// })
// .catch(err => {
//   console.error("Can't find settlement because: ", err);
// })

// Inventory.findByPk(1, {include: 'Settlement'})
// .then( res => {
//   console.log(res.Settlement.dataValues);
// })
// .catch( err => {
//   console.error(("Inventory Query Error: "), err);
// })

InventoryItem.bulkCreate([
  {
    invId: 3,
    itemId: 1,
    qty: 6
  },
  {
    invId: 3,
    itemId: 2,
    qty: 5
  },
  {
    invId: 3,
    itemId: 3,
    qty: 4
  }
])
.then( InventoryItems => {
  Inventory.findByPk(3, { include: ['items'] })
  .then(res => {
    res.items.forEach( item => console.log("Item data is ", item.dataValues.InventoryItem.dataValues));
  })
  .catch(err => {
    console.log(err);
  })
})
.catch(err => {
  console.log(err);
})

// Inventory.findByPk(2, {include: ['items']})
// .then( res => {
//   res.items.forEach( item => console.log("Item data is ", item.dataValues.InventoryItem.dataValues));
// })
// .catch( err => {
//   console.log( err )
// })