var express =  require('express');  
var userControler = require('../controller/userController');  
  
// express.Router is a class to create route handlers  
//router will contain the Router instance.  
var router = express.Router();  
  
//this route will be executed on /user/home request  
//userHome function will be called from the controller when request come for this route.  
 router.get('/home',userControler.userHome)  
  
//this route will be executed on /user/add  
//addUsers function will be called from the controller when request come for this route.  
 router.post('/add',userControler.addUsers)  
  
module.exports = router;  