import { screen, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import { BookingPage } from '../../BookingPage';

import { ConfirmedBooking } from './ConfirmedBooking';

/*************************************************************************/
/*** Setup Mocks */
/*************************************************************************/

const context = {
  data: {
    booking_id: '1944ce634a44e7',
    firstName: 'John',
    lastName: 'Doe',
    bookingDate: '2023-02-28',
    bookingTime: '19:30',
    guests: '5',
    occasion: 'birthday',
  },
  stage: 'Thank You',
};
