import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import CalendarForm from "../homePageComponents/CalendarForm";

test('test the render of the home page', () => {
    render(<CalendarForm />);
    expect(screen.getByText('2 hours')).toHaveTextContent('2');
})
