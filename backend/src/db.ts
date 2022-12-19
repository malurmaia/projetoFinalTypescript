import {  Sequelize } from "sequelize";
require("dotenv").config();

const DB_NAME: string = process.env.DB_NAME || "genius_game";
const DB_USER: string = process.env.DB_USER|| "root";
const DB_PASSWORD: string = process.env.DB_PASSWORD || "Vegas21**";
const DB_HOST: string = process.env.DB_HOST || "localhost";

const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    dialect: 'mysql' ,
    host: DB_HOST
})

export {
    sequelize
}