var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Decoradores
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta Estampada con el logo ' + logo);
        };
    };
}
//Clase (Molde del Objeto)
//@estampar('JAJAJAJAJAJ')
var Camiseta = /** @class */ (function () {
    //Métodos (Funciones o Acciones de la Clase)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
//Clase Hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta('Rojo', 'Manga Larga', 'NIKE', 'M', 10);
camiseta.setColor('Azul');
//camiseta.estampacion();
console.log(camiseta);
var playera = new Camiseta('Verde', 'Manga Corta', 'ADIDAS', 'M', 20);
playera.setColor('Blanca');
console.log(playera);
var sudadera = new Sudadera('Naranja', 'Sudadera', 'ADIDAS', 'M', 20);
sudadera.setCapucha(true);
console.log(sudadera);
alert("Bienvenidos");
