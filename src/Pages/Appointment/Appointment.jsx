import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvibleSlotes from './AvibleSlotes';

const Appointment = () => {
    return (
        <div className='mt-8'>
            <AppointmentBanner />
            <AvibleSlotes />
        </div>
    );
};

export default Appointment;