var express = require('express');
var superagent = require('superagent');
var consolidate = require('consolidate');


var app = express();

//Configure tempate engine
app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public'));


app.get('/',function(req, res){

  /*superagent.get("url")
    .query({api_key: api_key,
      username: username,
      _token: _token})
    .set({  Accept: 'application/json' })
    .end(function(e, storifyResponse){
      if (e) next(e);
      //Render template with story object in response body     
      return res.render('index',storifyResponse.body.content);     
    })*/

})

app.listen(3030);
console.log("access aksaramaya miniserver http://hostname:3030"); 