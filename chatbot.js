var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports=function(app){

    app.get('/',function(req,res){
      res.sendFile(__dirname+'/bot.html');
    });  
     
  
  };