import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
    const [frequency, setFrequency] = useState('daily');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
console.log(frequency)
    const newTransaction = {
      text,
      amount: +amount,
      frequency:frequency
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          <label for="frequency">Frequency  </label>
           <select name="frequency" id="frequency" onChange={(e) => setFrequency(e.currentTarget.value)}>
             <option value="daily">daily</option>
             <option value="weekly">weekly</option>
             <option value="monthly">monthly</option>
             <option value="annually">annually</option>
           </select>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
