import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Id {serviceId}</h1>
        </div>
    );
};

export default Booking;