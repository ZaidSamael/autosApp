var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Mazda = require('../models/autos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Autos App' });
});

router.get('/mazda',function(req,res,next){
	var infoMazda={}
	infoMazda.pais='Japón';
	infoMazda.sectorVentas='Comercial';
	infoMazda.anioFundacion=1929
	infoMazda.logo="https://logels.com/wp-content/uploads/2018/08/kisspng-jaguar-cars-mazda-logo-mazda-5ad6dda21fb258.jpg";
	res.render('mazda', infoMazda);
});

router.get('/rollsroyce',function(req,res,next){
	var inforollsroyce={}
	inforollsroyce.pais='Reino Unido';
	inforollsroyce.sectorVentas='Luxury'
	inforollsroyce.anioFundacion=1904
	inforollsroyce.logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_Rolls_Royce_por_Hernando.svg/250px-Logo_Rolls_Royce_por_Hernando.svg.png"
	res.render('rollsroyce',inforollsroyce);
});

router.post('/alta',function(req,res,next){
	//crear un objeto mongo
	// hacer el insert
	var miMazda = Mazda({
		nombre:req.body.nombre,
		foto: req.body.foto
	});

	miMazda.save(function(err,data){
		if(err) {console.log('error');}
		else{
			res.render('resultadoAlta', data);
		}
	});

});

module.exports = router;
