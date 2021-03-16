//String
let     cadena:     string      =   'Edgar Silva';
console.log(cadena);

//Number
let     edad:       number      =   31;
console.log(edad);

//Boolean
let     verdaderoFalso:       boolean      =   true;
console.log(verdaderoFalso);

//Any= cualquier cosas
let     cualquiera:       any      =   'Hola Cualquier cosa';
console.log(cualquiera);

//Arrays
var     lenguajes:  Array<string>   =   ["PHP" , "JS" , "CSS"];
console.log(lenguajes);
var     years:  number[]            =   [2020 , 2019,2018];
console.log(years);
var     ArrauCualquierCosa:any[]    =   [2020,'jajaja', true];
console.log(ArrauCualquierCosa);

//Varios Tipos de Datos
let variosTiposDatos:   String|number   =   '150';
console.log(variosTiposDatos);

//Crear Tipos de Datos
type    AlfaNumerico=   String | number;
let variableAlfaNumerica:   AlfaNumerico   =   '358';
console.log(variableAlfaNumerica);

//Diferencia Entre Let y Var
var     numero1 =   10;
var     numero2 =   12;
if(numero1==10){
    let numero1=44;
    var numero2=55;
    console.log(numero1 , numero2);//Muestra 44 ,55
}
console.log(numero1 , numero2);//Muestra 10 , 55