import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Ads = sequelize.define('Ads', {
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }
});
 Ads.sync({force:false})
export default Ads;
