import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkout from '../components/Cart/Checkout';

// Mock the onSubmitCheckout and onShowCheckoutChange callbacks
const mockSubmitCheckout = jest.fn();
const mockShowCheckoutChange = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Checkout component', () => {
    test('renders Checkout component', () => {
        render(
            <Checkout
                onSubmitCheckout={mockSubmitCheckout}
                onShowCheckoutChange={mockShowCheckoutChange}
            />
        );

        // Perform assertions to ensure the initial state of the component is rendered correctly
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Address')).toBeInTheDocument();
        expect(screen.getByLabelText('Remarks')).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: 'Cancel' })
        ).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled();
    });

    test('allows entering input values', () => {
        render(
            <Checkout
                onSubmitCheckout={mockSubmitCheckout}
                onShowCheckoutChange={mockShowCheckoutChange}
            />
        );

        // Enter input values
        const nameInput = screen.getByLabelText('Name');
        const addressInput = screen.getByLabelText('Address');
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(addressInput, { target: { value: '123 Main St' } });

        // Validate input values
        expect(nameInput.value).toBe('John Doe');
        expect(addressInput.value).toBe('123 Main St');
    });

    test('displays error messages for invalid inputs', () => {
        render(
            <Checkout
                onSubmitCheckout={mockSubmitCheckout}
                onShowCheckoutChange={mockShowCheckoutChange}
            />
        );

        // Blur the input fields without entering any values
        const nameInput = screen.getByLabelText('Name');
        const addressInput = screen.getByLabelText('Address');
        fireEvent.blur(nameInput);
        fireEvent.blur(addressInput);

        // Validate error messages
        expect(screen.getByText('Name must not be empty!')).toBeInTheDocument();
        expect(
            screen.getByText('Address must not be empty!')
        ).toBeInTheDocument();
    });

    test('calls onSubmitCheckout callback when Confirm button is clicked with valid inputs', () => {
        render(
            <Checkout
                onSubmitCheckout={mockSubmitCheckout}
                onShowCheckoutChange={mockShowCheckoutChange}
            />
        );

        // Enter valid input values
        const nameInput = screen.getByLabelText('Name');
        const addressInput = screen.getByLabelText('Address');
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(addressInput, { target: { value: '123 Main St' } });

        // Click the Confirm button
        const confirmButton = screen.getByRole('button', { name: 'Confirm' });
        fireEvent.click(confirmButton);

        // Validate that the onSubmitCheckout callback is called with the correct data
        expect(mockSubmitCheckout).toHaveBeenCalledWith({
            name: 'John Doe',
            address: '123 Main St',
            remarks: ''
        });
    });

    test('calls onShowCheckoutChange callback when Cancel button is clicked', () => {
        render(
            <Checkout
                onSubmitCheckout={mockSubmitCheckout}
                onShowCheckoutChange={mockShowCheckoutChange}
            />
        );

        // Click the Cancel button
        const cancelButton = screen.getByRole('button', { name: 'Cancel' });
        fireEvent.click(cancelButton);

        // Validate that the onShowCheckoutChange callback is called
        expect(mockShowCheckoutChange).toHaveBeenCalled();
    });
});
