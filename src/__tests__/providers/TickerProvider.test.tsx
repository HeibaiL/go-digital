import React from 'react';
import { render} from '@testing-library/react';
import TickerProvider from '../../providers/ticker/TickerProvider';

jest.mock('socket.io-client', () => ({
  io: jest.fn(() => ({
    on: jest.fn(),
    emit: jest.fn(),
  })),
}));

describe('TickerProvider', () => {
  it('renders children', () => {
    const ChildComponent = () => {
      return <div>0</div>;
    };

    const { getByText } = render(
      <TickerProvider>
        <ChildComponent />
      </TickerProvider>
    );

    expect(getByText('0')).toBeInTheDocument();
  });

  it('renders children and provides context', () => {
    //should have a mocked io in order to handle full functionality
  });
});
