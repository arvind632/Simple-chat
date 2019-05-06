var express = require('express');
var app = express();
var mysql = require('mysql');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/view'));




var db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'password',
	database : 'cloudprint',
});

db.connect(function(err,result){
  	if(err) { console.log(err); }
});



io.on('connection', function(socket){
  console.log('an user connected');
  socket.on('chat message', function(msg){
    
    db.query("INSERT INTO notes (note) VALUES ('"+msg+"')");
    io.emit('chat message', msg);
    console.log('message: ' + msg);

  });

  
  db.query("SELECT * FROM notes",function (err,rows) {
    if(err) throw err;
    	io.emit('send_db_data',rows);
  });
   

});





app.get('/',function(req, resp){
	   resp.sendFile(__dirname+"/view/index.html");
});




http.listen(9000,function(){
   console.log("Server create on port : 9000");
});