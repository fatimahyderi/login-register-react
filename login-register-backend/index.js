import dotenv from 'dotenv'
import express from "express"
import { router } from './route/router.js'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import { dbData } from './database/connection.js'
import { User } from './model/model.js'

dotenv.config()

dbData();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || process.env.API_PORT;
// var corsOptions = {
//   origin:  "https://cg-karl-fashion-react.herokuapp.com",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, variousSmartTVs) choke on 204
//   credentials:true
// }
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/items', router);
// app.set('view engine', 'ejs');
// app.use('/cosmetic', express.static(path.join(__dirname, 'public/assets/css')))


app.post('/login', (req, res) => {
    // console.log("req.body")
    const {email , password} = req.body
    User.findOne({email:req.body.email}).
    then(userData => {
        //res.render('index', { userData })
        console.log(userData)
        res.send(userData)
    })
});
    //         if(user){
    //             if(password === user.password){
    //                 res.send({message: "login successful",user : user})
    //             }else {
    //                 res.send({message: "password not matched"})
    //             }
                
    //         } else {
    //             res.send({message : "user not registered"})
    //         }
    //     })
    // })

// app.post('/register', (req, res) => {
//     const { name, email, password } = req.body
//     const user = new User({
//         name,
//         email,
//         password
//     })
// })
app.post('/register', (req, res) => {
    
    const reguser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    reguser.save(reguser).then(data => {
        res.send(data)
    });
   })

app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
});