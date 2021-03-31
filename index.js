const express = require('express');
const {Sequelize} = require("sequelize");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const Item = sequelize.define('item', {
        id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        name: {type: Sequelize.STRING(255), allowNull: false,},
        idParent: {type: Sequelize.INTEGER, allowNull: true,},
    },
    {tableName: 'item', timestamps: false, underscored: true}
);

sequelize.sync({logging: console.log});
(async () => {
    if (await Item.count() === 0) {
        console.log("/!\\ La base de donnée est vide");
    }
})();


let corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'slt !'
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});