import React, { useState, useCallback, useEffect } from 'react';
import { OK, ERROR, EMPTY, DENIED, LOADING } from '../constants';
import App from './App';

const errorCodes = {
  200: OK,
  204: EMPTY,
  401: DENIED,
  500: ERROR
};

const fetchData = ({ setStatus, setData }) => async () => {
  setStatus(LOADING);
  const response = await fetch('http://localhost:5000/test');

  if(response.ok && response.status !== 204) {
    const { results } = await response.json();
    setData(results);
  }
  setStatus(errorCodes[response.status]);
};

const useHooks = () => {
  const [status, setStatus] = useState(LOADING);
  const [data, setData] = useState(null);
  const onRetryClick = useCallback(fetchData({ setStatus, setData }), []);
  
  useEffect(() => {
    fetchData({ setStatus, setData })()
  }, []);

  return {
    status,
    data,
    onRetryClick
  }
};

const Enhanced = () => {
  const props = useHooks();
  return <App { ...props } />;
}

export default Enhanced;

