var express = require('express');
var router = express.Router();

router.get('/mazda',function(req,res,next){
	var data={autos:[]};
	var auto={};
	auto.nombre="Mazda 3";
	auto.foto="https://www.mazda.mx/siteassets/mazda-mx/mycos-2019/mazda-3-sedan/vlp/versiones/mazda-3-sedan-vlp-versiones-i.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda 6";
	auto.foto="https://d1eip2zddc2vdv.cloudfront.net/dphotos/750x400/20054-1532012024.jpg";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6o9xUZchg7BaMyhPd-22KmwI-gL1x6bLp5Nou9hL92jKMzOa";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6o9xUZchg7BaMyhPd-22KmwI-gL1x6bLp5Nou9hL92jKMzOa";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6o9xUZchg7BaMyhPd-22KmwI-gL1x6bLp5Nou9hL92jKMzOa";
	data.autos.push(auto);

	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6o9xUZchg7BaMyhPd-22KmwI-gL1x6bLp5Nou9hL92jKMzOa";
	data.autos.push(auto);

	console.log(data);

	res.render("./galerias/mazda", data);
});

module.exports = router;