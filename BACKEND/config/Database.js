import {Sequelize} from "sequelize";

const db = new Sequelize('Pantasin','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;