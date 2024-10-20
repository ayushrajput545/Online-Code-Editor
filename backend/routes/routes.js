const express= require('express');
const router = express.Router();

const{signup , login} = require('../controllers/user');
const{projects , getAllprojects , deleteProject ,updateCode} = require('../controllers/projects');
const{auth} = require('../middlewares/auth');
 


router.post('/signup' , signup);
router.post('/login', login);
router.post('/createProject', auth, projects);
router.get('/getAllprojects' ,auth,  getAllprojects);
router.delete('/deleteProject/:id' ,auth, deleteProject);
router.put('/updatecode/:id',updateCode);
 
module.exports = router