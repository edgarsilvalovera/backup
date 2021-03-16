//Interface: son las propiedas y metodos obligatorios quiero tenga una clase
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decoradores
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log('Camiseta Estampada con el logo '+logo);            
        }
    }
}


//Clase (Molde del Objeto)
//@estampar('JAJAJAJAJAJ')
class Camiseta implements CamisetaBase{
    //Propiedades (Caracteristicas de la CLase) private : solo accedo desde la clase que lo define, protected accede desde la clase y cualquier clase que herede
    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number;

    //Métodos (Funciones o Acciones de la Clase)
    constructor(color, modelo, marca , talla , precio){
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.talla=talla;
        this.precio=precio;
    }

    public setColor(color){
        this.color=color;
    }

    public getColor(){
        return this.color;
    }

}

//Clase Hija
class Sudadera extends Camiseta{
    public  capucha:boolean;

    public setCapucha(capucha: boolean){
        this.capucha=capucha;        
    }

    public getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta    =   new Camiseta('Rojo' , 'Manga Larga' , 'NIKE' , 'M' , 10);
camiseta.setColor('Azul');
//camiseta.estampacion();
console.log(camiseta);

var playera    =   new Camiseta('Verde' , 'Manga Corta' , 'ADIDAS' , 'M' , 20);
playera.setColor('Blanca');
console.log(playera);

var sudadera = new Sudadera('Naranja' , 'Sudadera' , 'ADIDAS' , 'M' , 20);
sudadera.setCapucha(true);
console.log(sudadera);

