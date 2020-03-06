const {Router} = require ('express');
const router = Router();

router.get('/',(req,res)=>{
    res.render('index.html',{title: 'Home'})
});

router.get('/upload',(req,res)=>{
    res.render('layouts/upload.html',{title: "Uploads"});
});

router.post('/upload', (req,res)=>{

});

router.get('/image/:id',(req,res)=>{

});

router.get('/image/:id/delete',(req,res)=>{

});
module.exports = router;