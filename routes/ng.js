var express = require('express');
var router = express.Router();


router.get('/ng.html', function(req, res, next) {
     
     //渲染模板
      //res.render('plugindemo/bootstrap-dialog');
      res.render('ng/ng');
});
router.get('/page1.html', function(req, res, next) {
     
     //渲染模板
      //res.render('plugindemo/bootstrap-dialog');

      //数据
     var data = {
     title: '国内要闻',
     time: (new Date).toString(),
     list: [
          {
               id: '1',
               name: '张三'
          },
          {
               id: '2',
               name: '李四'
          }
     ]
     };
     //渲染模板
  	 res.render('ng/page1',data);
     // res.render('ng/page1');
});


module.exports = router;
