const Express = require('express');

const app = Express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Inventory app listening on port ${port}`));