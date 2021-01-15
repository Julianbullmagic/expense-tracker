export default (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
      case 'ADD_TO_TOTAL':
        return {
          ...state,
          total: state.total+action.payload
        }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
      case 'SET_INTERVAL':
        return {
          ...state,
          interval: action.payload
        }
        case 'INTERVAL_ERROR':
          return {
            ...state,
            error: action.payload
          }
    default:
      return state;
  }
}
