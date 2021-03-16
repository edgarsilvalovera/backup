import React from 'react';
//import React, { Fragment } from 'react';
import { PropTypes } from "prop-types";

//Funcional Component
const PrimeraApp = ( {saludo , subtitulo} ) => {

    //console.log (props);
    //const saludo = 'Esto es un Saludio de mi App'
    /*const miJson = {
        nombre: 'Edgar',
        apellido: 'Silva',
        edad: 19
    }*/

    /*
    if(!saludo){
        throw new Error('El Saludo es Necesario');
    }
    */

    return (
        /*
        <Fragment>
            <h1>Hola Mundo Desde el Componente</h1>
            <p>Mi Primera Aplicación</p>
        </Fragment>
        */
       <>
            <h1> {saludo} </h1>
            <p>{subtitulo}</p>
            {/*<pre>{JSON.stringify(miJson , null , 3)}</pre>*/}
       </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo:  'Mi Primera App'
}

export default PrimeraApp;