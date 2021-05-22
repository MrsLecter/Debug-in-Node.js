const { Sequelize } = require('sequelize');
const PORT_DB = 5432;
//database username   password
const sequelize = new Sequelize('postgres', 'postgreuser', 'ghastb01',{
    host: 'localhost',
    port: PORT_DB,
    dialect: 'postgres',
    operatorsAliases: false
});

const User = require('./models/user')(sequelize, Sequelize);
const Game = require('./models/game')(sequelize, Sequelize);

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
);

module.exports = { sequelize, User, Game };