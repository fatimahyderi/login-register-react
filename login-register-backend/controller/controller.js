import { User } from '../model/model.js'
import mongoose from "mongoose";


/*================== Render Route Views ========================*/
const registeruser = (req, res) => {
    
        const reguser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        reguser.save(reguser).then(data => {
            res.send(data)
        });
       }


export { registeruser }