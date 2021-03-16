import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events: [{
        id: new Date().getTime(),
        title:'Cumpleaños del Jefe',
        start: moment().toDate(),//new Date()
        end: moment().add( 2 , 'hours' ).toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar el Pastel',
        user:{
            _id: '123',
            name: 'Fernando'
        }
    }],
    activeEvent: null

};

export const calendarReducer = ( state = initialState, action ) => {
    switch( action.type ){   
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }     

        case types.eventAddNew:
            return{
                ...state,
                events: [                  
                    ...state.events,             
                    action.payload
                ]
            }
        
        case types.eventClearActiveEvent:
            return{
                ...state,
                activeEvent: null
            }

        case types.eventUpdated:
            return{
                ...state,
                events: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }

        case types.eventDeleted:
            return{
                ...state,//regreso todo el objeto state
                events: state.events.filter(
                    e => ( e.id !== state.activeEvent.id )
                ),
                activeEvent: null
            }

        default:
            return state;
        break;
    }
}