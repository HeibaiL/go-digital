import { TickerData } from './providers/ticker/types';

export const snakeToTitleCase = (input: string) => {
  const words = input.split('_');
  const firstWord = words.shift(); // Remove the first word from the array
  const restOfWords = words.join(' ');

  return `${firstWord?.charAt(0).toUpperCase()}${firstWord?.slice(1)} ${restOfWords}`;
};

export const formatCompactTime = (dateTimeString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateTimeString));
};

export const serializeStock = (stock: TickerData) => {
  return {
    ...stock,
    last_trade_time: formatCompactTime(stock.last_trade_time),
  };
};

export const filterNaNValuesFromStock = (obj: TickerData) => {
  return Object.entries(obj).reduce<{ [key: string]: number }>((acc, curr) => {
    const [key, value] = curr;
    if (!Number.isNaN(Number(value))) {
      acc[key] = Number(value);
    }

    return acc;
  }, {});
};
