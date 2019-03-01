import express from 'express';
import Business from '../models/businessModel';
const bussinessRouter = express.Router();

bussinessRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
bussinessRouter.route('/')
    .get((req, res) => {
        Business.find({}, (err, businesses) => {
            res.json(businesses)
        })  
    })
    .post((req, res) => {
        let business = new Business(req.body);
        business.save();
        res.status(201).send(business) 
    })
	 
export default bussinessRouter;