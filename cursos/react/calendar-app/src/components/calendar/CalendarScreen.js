import React , {useState} from 'react';
import {Calendar , momentLocalizer} from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { AddNewFab } from '../ui/AddNewFab';
import { DeteleEventFab } from '../ui/DeleteEventFab';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';


import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es';







moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        console.log('Doble Click');  
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = (e) => {
        //console.log(e);
        //console.log('Click');   
        dispatch( eventSetActive( e ) );
        dispatch( uiOpenModal() );
    }

    const onViewChange = (e) => {        
        setlastView(e);
        localStorage.setItem('lastView' , e) ;
    }

    const onSelectSlot = (e) => {
        console.log( e );
        dispatch( eventClearActiveEvent() );
    }

    const eventStyleGetter = ( event, start, end, isSelected) => {        

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opactiy: 0.8,
            display: 'block',
            color: 'white'
        }

        return {style};
    };

    return(
        <div className='calendar-screen'>
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter= {eventStyleGetter}
                onDoubleClick= {onDoubleClick}
                onSelectEvent= {onSelectEvent}
                onView={ onViewChange }
                onSelectSlot={ onSelectSlot }
                selectable= { true }
                view={lastView}
                components= {{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />

            {
                (activeEvent) && <DeteleEventFab />                                  
            }
            

            <CalendarModal />
        </div>
    )
}

