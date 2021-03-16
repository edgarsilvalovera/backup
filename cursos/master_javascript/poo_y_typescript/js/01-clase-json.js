//Creando una Clase
var bicicleta   =   {
    color:              'Rojo',
    modelo:             'MBX',
    frenos:             'De Disco',
    velocidad_max:      '60KM',
    cambiaColor:        function(nuevoColor){
        //bicicleta.color =   nuevoColor;
        this.color      =   nuevoColor;
    }
};

console.log(bicicleta);

bicicleta.cambiaColor('Azul');
console.log(bicicleta);