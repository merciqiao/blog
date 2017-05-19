var express = require('express');
var router = express.Router();


router.get('/vuedemo.html', function(req, res, next) {
     
     //渲染模板
      //res.render('plugindemo/bootstrap-dialog');
      res.render('vuepage/index');
});

module.exports = router;
