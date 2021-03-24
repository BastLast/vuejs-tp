const express = require('express');
const {Sequelize} = require("sequelize");
const app = express();

(async () => {

    const sequelize = new Sequelize({
        dialect: "sqlite",
        storage: "database.sqlite"
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


app.get('/', (req, res) => {
    res.json({
        message: 'slt !'
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});