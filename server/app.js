import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import multer from "multer"
import sequilize from "./db.js"
import postRouter from "./routes/PostRoute.js"
import adsRouter from "./routes/AdsRoute.js"
import userRouter from "./routes/UserRoute.js"
import path from "path"
import subRouter from "./routes/SubRoute.js"
import axios from "axios"

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
    app.use((req, res, next) => {
      res.setHeader('Content-Security-Policy', "upgrade-insecure-requests");
      next();
    });
    dotenv.config();

    //   app.use(express.urlencoded({extended:true}));
    app.use('/images',express.static('images'))

    //middleware
    app.use('/post',upload.single("image"),postRouter);
    app.use('/ads',upload.single("image"),adsRouter);
    app.use('/user',userRouter);
    app.use('/sub',subRouter);


  
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
  