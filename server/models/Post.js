import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Post = sequelize.define('Post', {
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
 Post.sync({force:false})
export default Post;
