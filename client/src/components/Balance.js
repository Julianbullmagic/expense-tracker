import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions,interval } = useContext(GlobalContext);



  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <>
      <h4>Your Balance</h4>
    <h1>${numberWithCommas(total)}</h1>
    </>
  )
}