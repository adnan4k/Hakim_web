import Sequelize from 'sequelize'; 
import dotenv from "dotenv"
dotenv.config();

const sequilize = new Sequelize(process.env.DB_REMOTE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port:process.env.MYSQL_PORT,
  logging:false, 
});


export default sequilize;
