const express = require('express');
const {GetUsers, GetUser, AddUser, DeleteUser, UpdateUser} = require('../controller/userController');
const router = express.Router();



router.get('/users', GetUsers);
router.get('/user/:id', GetUser);

router.post('/adduser', AddUser);

router.delete('/deleteuser/:id', DeleteUser);

router.put('/updateuser/:id', UpdateUser);



module.exports = router;