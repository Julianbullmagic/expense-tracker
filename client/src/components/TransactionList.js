import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions, setInterval, interval } = useContext(GlobalContext);
  const [localInterval,setLocalInterval]=useState('daily')
  




  useEffect(() => {

    getTransactions();
    setInterval(localInterval)

  }, [localInterval,setLocalInterval]);

  return (
    <>
    <select name="frequency" id="frequency" onChange={(e) => setLocalInterval(e.currentTarget.value)}>
      <option value="daily">daily</option>
      <option value="weekly">weekly</option>
      <option value="monthly">monthly</option>
      <option value="annually">annually</option>
    </select>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}
