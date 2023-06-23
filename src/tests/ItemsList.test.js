import { render, screen } from '@testing-library/react';
import ItemsList from '../components/Item/ItemsList';

describe('ItemsList component', () => {
    test('renders list of ProductItem components', async () => {
        // Mock the response data
        const mockData = {
            product1: {
                id: 'product1',
                name: 'Product 1',
                description: 'Description 1',
                price: 9.99
            },
            product2: {
                id: 'product2',
                name: 'Product 2',
                description: 'Description 2',
                price: 19.99
            }
        };

        // Mock the global fetch method
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });

        render(<ItemsList />);

        // Wait for the fetch call and component rendering to complete
        await screen.findByText('Product 1');
        await screen.findByText('Product 2');

        // Assert that the ProductItem components are rendered
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
});
