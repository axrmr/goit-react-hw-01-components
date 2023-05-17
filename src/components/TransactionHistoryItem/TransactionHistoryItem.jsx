import PropTypes, { number } from 'prop-types';
const TransactionHistoryItem = ({ type, amount, currency }) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <tr
      style={{
        backgroundColor: [getRandomHexColor()],
      }}
    >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  amount: PropTypes.string || number,
  currency: PropTypes.string,
  type: PropTypes.string,
};

export default TransactionHistoryItem;
