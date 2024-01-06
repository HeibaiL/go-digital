import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TickerData = {
  ticker: string;
  exchange: string;
  price: string;
  change: string;
  change_percent: string;
  last_trade_time: string;
  dividend: string;
  yield: string;
};

export type TickerContextType = {
  data: TickerData[];
  setData: Dispatch<SetStateAction<TickerData[]>>;
  connectStock: (token: string) => void;
};

export type TickerProviderProps = {
  children: ReactNode;
};
