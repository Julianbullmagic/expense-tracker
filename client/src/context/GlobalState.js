import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
var initialState = {
  transactions: [],
  interval:'weekly',
  total:0,
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer,initialState);
   useEffect(() => {

  }, [state])


  async function setInterval(interval) {



      await  dispatch({
          type: 'SET_INTERVAL',
          payload: interval
        });
        await  console.log(state.interval)

  }

  async function addToTotal(num) {

      await  dispatch({
          type: 'ADD_TO_TOTAL',
          payload: num
        });
        await  console.log(state.interval)

  }



  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/transactions', transaction, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    interval:state.interval,
    total:state.total,
    getTransactions,
    deleteTransaction,
    addTransaction,
    setInterval,
    addToTotal
  }}>
    {children}
  </GlobalContext.Provider>);
}
