var productos=[
{
	nombre: 'pijama',
	tipo:	'ropa'
},	
 {
	nombre: 'nevera',
	tipo:	'electrodomestico'
},
{
	nombre:	'asus',
	tipo: 'computador'
},
{
	nombre: 'macbook',
	tipo: 	'computador'
},
{
	nombre:	'pijama',
	tipo:	'ropa'
},
{
	nombre: 'toshiba',
	tipo:	'computador'
},
];

var computadores = [];
	for(var i = 0; i < productos.lenght; i++){
		if (productos[i].tipo === 'computador'){
			computadores.push(productos[i]);
	}

var computadores= productos.filter(function(producto){
	return producto.tipo === 'computador';
});

}

	