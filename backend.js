var pepito = "Madrid";
var basededatos = {
	usuario: "martin",
	password: "redondos26"
};
console.log("Arrancando server de node");

var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use(parcero.urlencoded());
var servidor;

servidor = web.listen(8080, function() {
	console.log("Servidor Arrancado");
});

web.get("/", function(req, res) {
	res.sendfile("formulario.html");
});

web.post("/entrar", function(req, res) {
	if(req.body.usuario == basededatos.usuario && req.body.password == basededatos.password)
	{
		res.send("Bienvenidos al area de miembros");
	}
	else
	{
		res.send("Usuario y password invalidos");
	}

});
// web.get("/test", function(req, res) {
// 	console.log(req);
// 	res.send("tu avion es el " + req.query.avion + " y tu edad es " + req.query.edad);
// });