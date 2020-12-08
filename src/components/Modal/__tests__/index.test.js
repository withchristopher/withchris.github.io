import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'



const mockCurrentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup)

describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
        render( <Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />
        );

    });
    //snapshop test
    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        const { asFragment } = render(
            <Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />
        );

        expect(asFragment()).toMatchSnapshot();
        // Assert the match
      });
})

describe('Click Event', () => {
	it('calls onClose handler', () => {
		const { getByText } = render(
			<Modal currentPhoto={mockCurrentPhoto} onClose={mockToggleModal} />
		);

		fireEvent.click(getByText('Close this modal'));

		expect(mockToggleModal).toHaveBeenCalledTimes(1);
	});
}); 