import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

// describe('ContactForm is rendering', () => {
//     it('renders', () => {
//         render(<PhotoList />);
//     });

//     it('renders', () => {
//         const { asFragment } = render(<PhotoList />)
//         expect(asFragment()).toMatchSnapshot()
//     });

//     it('renders', () => {
//        // const { asFragment } = render()
//     })
// });