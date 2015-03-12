var http = require("http");
var port = 8887;
var messages = ["Hello there.", "I cannot take any requests at this time.", "I can tell you how to do that.", "I have no idea.", "Go away.", "Why would I know that?", "Your mom", "Fred was here"];

var onRequest = function(req, res){
	if(req.method === "GET"){
		res.writeHead(200, {
		"Connection": "close",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	})
	res.end(JSON.stringify({message: randomMessage(messages)}))
	}
};

var randomMessage = function(array){
	var num = Math.floor(Math.random()*(array.length));
	return array[num];
}




http.createServer(onRequest).listen(port);

console.log("listening on port " + port)

