var express = require('express');
var router = express.Router();


router.get('/bootstrap-dialog.html', function(req, res, next) {
     
     //渲染模板
      res.render('plugindemo/bootstrap-dialog');
});

module.exports = router;
