import React from 'react';

import Chart from '../components/Chart';
import { useTickerContext } from '../providers/ticker/TickerProvider';
import Card from '../components/Card';
import { serializeStock } from '../utils';

function ExamplePage() {
  const { connectStock, data } = useTickerContext();

  const next = () => {
    connectStock('AAPL');
  };

  return (
    <div className="ticker_app">
      <div className="ticker-app__start-block">
        <h1>Example Page</h1>
        <button type="button" onClick={next}>
          Get Data
        </button>
      </div>

      {data.length > 0 && (
        <>
          <Chart data={data.map(serializeStock)} />
          <Card stock={serializeStock(data[data.length - 1])} />
        </>
      )}
    </div>
  );
}

export default ExamplePage;
