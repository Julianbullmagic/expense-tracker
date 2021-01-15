import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, interval, setInterval, addToTotal } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';




var amount=JSON.parse(JSON.stringify(transaction.amount))

if (transaction.frequency==="daily"){
  amount=amount
  var newamount=multiply(amount)
  amount=newamount

}
else if (transaction.frequency==="weekly"){
  amount=amount/7
  var newamount=multiply(amount)
  amount=newamount

}
else if (transaction.frequency==="monthly"){
  amount=amount/31
  var newamount=multiply(amount)
  amount=newamount
}
else if (transaction.frequency==="annually"){
  amount=amount/365
  var newamount=multiply(amount)
  amount=newamount
}

function multiply(num){
  if (interval==="daily"){
    return num=num
  }
  else if (interval==="weekly"){
    return num=num*7
  }
  else if (interval==="monthly"){
    return num=num*31
  }
  else if (interval==="annually"){
    return num=num*365

  }
}

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${numberWithCommas(Math.abs(amount))}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
