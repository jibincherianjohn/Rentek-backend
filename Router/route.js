const express=require('express')

// router object
const router=new express.Router()

const PrControll=require('../Controller/projectControll')
const Ucontroller=require('../Controller/usercontroll')
const upload = require('../Middlware/multerMiddleware')
const { jwtMiddleware } = require('../Middlware/jwtMiddleware')



// register

router.post('/users/register',Ucontroller.register)

// login Api

router.post('/users/login',Ucontroller.login)

// update profile api

router.put('/user/updaeprofile/:_id',jwtMiddleware,upload.single('photo'),Ucontroller.updateProfile)  //upload.single('photo)

//  add -project

router.post('/user/addproject',jwtMiddleware,upload.single('projectImage'),PrControll.addProject)

// get user project
router.get('/user/getuserProject/:id',jwtMiddleware,PrControll.getUserpropertry)

// get all project

router.get('/user/allProject',PrControll.getAllpropertry)

// get limited project

router.get('/user/threeproject',PrControll.getThreepropertry)

// update user project
router.put('/user/updateproject/:_id',jwtMiddleware,PrControll.editProject)

// delete user project
router.delete('/user/projectdelete/:_id',jwtMiddleware,PrControll.deleteProj)

// user single view

router.get('/user/singleview/:_id',jwtMiddleware,PrControll.getperview)

module.exports=router