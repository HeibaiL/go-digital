import { io } from 'socket.io-client';
import { TickerContextType } from '../providers/ticker/types';

const LIMIT = 20;

let socket = null;

function tickerConnect(stockSymbol: string, setData: TickerContextType['setData']) {
  socket = io('http://localhost:4000');

  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('connect_error', (error) => {
    console.error('Connection error:', error);
  });

  socket.on('connect_timeout', () => {
    console.error('Connection timeout');
  });

  socket.emit('ticker', stockSymbol);

  socket.on(stockSymbol, (data: any) => {
    setData((currentData) => {
      const dataToSet = [...currentData, JSON.parse(data)];
      if (dataToSet.length > LIMIT) {
        dataToSet.shift();
      }

      return dataToSet;
    });
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
}

export default tickerConnect;
