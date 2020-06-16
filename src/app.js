const Express = require('express');
const app = Express();
const cors = require('cors');
var bodyParser = require('body-parser');
const port = process.env.PORT || 7000;
const db = require('./db/models');

const settlementRouter = require('./routes/settlements');

app.use(cors());
app.use(bodyParser.json());
app.use('/', settlementRouter);

app.get('/', async (req, res) => {
    let Items = await db.Item.findAll(
        { attributes: {exclude: ['createdAt', 'updatedAt']}, include: { model: models.InventoryItem, where: {invId: 1}, attributes: ['qty'] }}).catch((err) => console.log("ERROR IS", err));
        Items.forEach(item => {
            item.dataValues.qty = item.InventoryItems[0].qty;
            delete item.dataValues.InventoryItems;
        })

        
    res.send(Items);
});

app.get('/items', async (req, res) => {
    const options = {
        attributes: ['name', 'itemId', 'description']
    }
    const items = await db.Item.findAll(options)
    res.send(items);
})


const parseToItemFormat = (item) => {
    const newItem = {...item};
    newItem.qty = item.InventoryItem.qty;
    delete newItem.InventoryItem;
    return newItem;
}

app.get('/inventories/:settlementId', async (req, res) => {
    const settlementId = req.params.settlementId;
    const options = {
        where: {
            settlementId
        },
        attributes : {
            exclude : ['createdAt', 'updatedAt']
        },
        include: {
            association: 'items',
            attributes : {
                exclude : ['createdAt', 'updatedAt']
            },
            through: {
                attributes: ['qty'], 
            }
        },
    }
    let inventory = await db.Inventory.findOne(options)
    inventory = inventory.toJSON();
    inventory.items = inventory.items.map(item => parseToItemFormat(item));
    res.send(inventory);
});

const updateOrCreateInventoryItem = async (where, item) => {
    const Item = await db.InventoryItem.findOne(where)
    
    if(!Item) {
        return db.InventoryItem.create(item)
               .then((res) => item)
               .catch(err => console.log(err));
    }
    
    return Item.update({ qty: Item.dataValues.qty + 1 })
    .then((res) => item)
    .catch(err => console.log(err))
}

app.post('/inventories/items/:inventoryId', async (req, res) => {
    const invId = req.params.inventoryId;
    const itemId = parseInt(req.body.itemId);
    const qty = req.body.qty;
    
    const where = {
        where: {
            itemId,
            invId
        }
    }

    const item = {
        invId,
        itemId,
        qty
    }

    const returnedItem = await updateOrCreateInventoryItem(where, item)
    
    const formatItemInfo = (itemInfo) => {
        return {
            qty: itemInfo.qty,
            name: itemInfo.Item.name,
            description: itemInfo.Item.description,
            itemId: itemInfo.Item.itemId
        }
    }
    const fullItemInfo = await db.InventoryItem.findOne({
        where: {
            invId: invId,
            itemId: itemId
        },
        attributes: ['qty'],
        include: {
            model: db.Item,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
    });
    res.send(formatItemInfo(fullItemInfo.toJSON()));
});




app.listen(port, () => console.log(`Inventory app listening on port ${port}`));