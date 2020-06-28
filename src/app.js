const Express = require('express');
const app = Express();
const cors = require('cors');
var bodyParser = require('body-parser');
const port = process.env.PORT || 7000;
const db = require('./db/models');

//Route Imports
const settlementsRouter = require('./routes/settlementsRoutes');
const assetsRouter = require('./routes/assetsRoutes');

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routers
app.use('/settlements', settlementsRouter);
app.use('/assets', assetsRouter);





app.listen(port, () => console.log(`Inventory app listening on port ${port}`));