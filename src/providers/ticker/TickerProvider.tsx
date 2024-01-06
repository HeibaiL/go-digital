import React, { useContext, createContext, useState, useMemo } from 'react';
import { TickerContextType, TickerProviderProps } from './types';
import tickerConnect from '../../services/ticker';

const TickerContext = createContext<TickerContextType>({
  data: [],
  setData: () => null,
  connectStock: () => null,
});

export function useTickerContext() {
  const context = useContext(TickerContext);
  if (!context) {
    throw new Error('useTickerContext must be used within a TickerProvider');
  }
  return context;
}

function TickerProvider({ children }: TickerProviderProps): JSX.Element {
  const [data, setData] = useState<TickerContextType['data']>([]);

  //expected by eslint to wrap it in memo
  const contextValue = useMemo(() => {
    return {
      data,
      setData,
      connectStock: (symbol: string) => tickerConnect(symbol, setData),
    };
  }, [data, setData]);

  return <TickerContext.Provider value={contextValue}>{children}</TickerContext.Provider>;
}

export default TickerProvider;
