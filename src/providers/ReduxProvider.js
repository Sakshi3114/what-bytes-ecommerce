'use client';

import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import { store } from '@/redux/store';

const ReduxProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on client
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
