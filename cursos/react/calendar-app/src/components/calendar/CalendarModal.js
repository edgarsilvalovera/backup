import React , {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { uiCloseModal } from '../../actions/ui';

import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../../actions/events';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root')

const now = moment().minutes(0).seconds(0).add(1 , 'hours');
const nowPlus1 = now.clone().add(1 , 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
}


export const CalendarModal = ({ event }) => {   

    const dispatch = useDispatch();
    
    const { modalOpen } = useSelector(state => state.ui );
    const { activeEvent } = useSelector(state => state.calendar );


    const [isOpen, setIsOpen] = useState(true);

    const [dateStart, setdateStart] = useState(now.toDate());
    const [dateEnd, setdateEnd] = useState(nowPlus1.toDate());

    const [titleValid, settitleValid] = useState(true)

    const [formValues, setFormValues]= useState(initEvent);

    
    const { notes, title , start , end } = formValues;

    useEffect(() => {
        if( activeEvent ){
            setFormValues( activeEvent );
        }else{
            setFormValues( initEvent );
        }   
    }, [activeEvent, setFormValues]);

    const handelInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        //console.log("Cerrando");
        //setIsOpen(false);

        //TODO: cerrar la modal
        dispatch( uiCloseModal() );
        dispatch( eventClearActiveEvent () );
        setFormValues( initEvent );
    }

    const handleStartDateChange = (e) => {
        //console.log(e);
        setdateStart(e);
        setFormValues({
            ...formValues,
            start:e
        });
    }

    const handleEndtDateChange = (e) => {
        //console.log(e);
        setdateEnd(e);
        setFormValues({
            ...formValues,
            end:e
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();//preparación del formulario
        console.log('SUMBIT FORMULARIO '+e);
        console.log(formValues);

        const momentStart = moment( start );
        const momentEnd = moment( end );
        console.log(momentStart);
        if(momentStart.isSameOrAfter(momentEnd)){//Si es iguao o esta despues de End
            //console.log('Fecha 2 Debe Ser Mayor');
            return Swal.fire('Error' , 'La fecha fin debe ser mayor a la fecha de inicio');            
        }

        if(title.trim().length < 2){
            settitleValid(false);
        }

        //TODO: REALIZAR GRABACIÓPN EN BD
        //console.log( formValues );
        if( activeEvent ){
            dispatch( eventUpdated( formValues ) )
        }else{
            dispatch( eventAddNew({
                ...formValues,
                id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'Fernando'
                }
            }) );
        }

        

        settitleValid(true);
        closeModal();
    }


    return(
        <Modal
          isOpen={modalOpen}
          //onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}          
          className="modal"
          overlayClassName="modal-fondo"
          closeTimeoutMS={500}
        >
            <h1>
                { (activeEvent)? 'Editar Evento': 'Nuevo Evento' } 
            </h1>
            <hr />
            <form 
                className="container"
                onSubmit={handleSubmitForm}
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    {/*<input className="form-control" placeholder="Fecha inicio" />*/}
                    <DateTimePicker
                        onChange={handleStartDateChange }
                        value={dateStart }
                        className='form-control'
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    {/*<input className="form-control" placeholder="Fecha inicio" />*/}
                    <DateTimePicker
                        onChange={handleEndtDateChange }
                        value={dateEnd }
                        minDate={dateStart}
                        className='form-control'
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${ !titleValid && 'is-invalid' }`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handelInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handelInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>        
    )
}

