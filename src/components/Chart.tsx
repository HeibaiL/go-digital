import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, TooltipProps } from 'recharts';

import { TickerData } from '../providers/ticker/types';
import { snakeToTitleCase } from '../utils';

type ChartProps = {
  data: TickerData[];
};

function CustomTooltip({ active, payload }: TooltipProps<string, string>) {
  if (active && payload && payload.length) {
    const stockData = payload[0].payload;

    return (
      <div className="custom-tooltip">
        <p>{`Time: ${stockData.last_trade_time}`}</p>
        {Object.entries(stockData).map(([key, value]) => (
          <p key={`tooltip-entry-${key}`}>{`${snakeToTitleCase(key)}: ${value}`}</p>
        ))}
      </div>
    );
  }

  return null;
}

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
  label: '',
};

function Chart({ data }: ChartProps) {
  return (
    <LineChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="last_trade_time" />
      <YAxis dataKey="price" />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
}

export default Chart;
