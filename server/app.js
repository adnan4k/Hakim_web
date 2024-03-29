import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "--" + Date.now() + path.extname(file.originalname));
    }
  });  
    
    const upload = multer({storage:storage})
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(express.static('public'))
    dotenv.config();
    //   app.use(express.urlencoded({extended:true}));
    app.use('/images',express.static('images'))
  
try {
    await sequilize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  } catch (error) {
    console.log(error)
  }
  