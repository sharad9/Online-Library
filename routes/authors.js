const express = require('express');
const router = express.Router();

//All author route
router.get('/',(req,res)=>{
	res.render('author/index');
});

//newAuthor route
router.get('/new',(req,res)=>{
	res.render('author/new');
});
//create author route
router.post('/',(req,res)=>{
	res.send('Create')
});