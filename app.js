const express = require('express');
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');
const {sequelize} = require('./db')
const PORT = 5433;

sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/api/auth', user);
debugger;
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})