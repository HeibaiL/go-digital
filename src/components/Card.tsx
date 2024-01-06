import React, { useEffect, useState } from 'react';

import { TickerData } from '../providers/ticker/types';
import { filterNaNValuesFromStock, snakeToTitleCase } from '../utils';

import '../styles/components/card.scss';

type CardProps = {
  stock: TickerData;
};

type CardLabelProps = {
  label: string;
  value: string | number;
};

function CardLabel({ label, value }: CardLabelProps) {
  const [positiveChange, setPositiveChange] = useState<boolean>(true);
  const [prevValue, setPrevValue] = useState<number>(Number(value));

  useEffect(() => {
    if (Number(value) >= prevValue) {
      setPositiveChange(true);
    } else {
      setPositiveChange(false);
    }
    setPrevValue(Number(value));
  }, [value]);

  return (
    <p className={positiveChange ? 'positive' : 'negative'} key={`tooltip-entry-${label}`}>
      {`${snakeToTitleCase(label)}: ${value}`}
    </p>
  );
}

function Card({ stock }: CardProps) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { ticker, exchange, last_trade_time } = stock;

  const financialDataEntries = Object.entries(filterNaNValuesFromStock(stock));

  return (
    <div className="ticker-app__stock-card">
      <h2>{ticker}</h2>
      <p>{exchange}</p>
      <p>{last_trade_time}</p>
      {financialDataEntries.map(([key, value]) => (
        <CardLabel label={key} value={value} />
      ))}
    </div>
  );
}

export default Card;
