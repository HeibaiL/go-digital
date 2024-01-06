import React from 'react';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import ExamplePage from '../../pages/ExamplePage';

describe('ExamplePage', () => {
  test('renders ExamplePage component', () => {
    const { getByText } = render(<ExamplePage />);
    expect(getByText('Example Page')).toBeInTheDocument();
  });
});
