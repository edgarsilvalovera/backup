import React , {useState} from 'react';
import { PropTypes } from "prop-types";

const CounterApp = ({value}) => {

    //const state = useState('Edgar Silva');
    //const [nombre , setNombre] = useState('Edgar Silva');
    let [ counter , setCounter ] = useState(value);//useState es un arreglo de 2 posiciones 
    

    //handelAdd
    const handleAdd = (e) => {
        //console.log(e);
        setCounter( counter + 1);
    }

    const handleSubtract = () => setCounter( counter - 1);
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <h2> { counter } </h2>
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSubtract } >-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;