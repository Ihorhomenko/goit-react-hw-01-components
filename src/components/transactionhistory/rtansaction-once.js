import PropTypes from 'prop-types';

const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tr>
      <td className="tab-item-data">{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  id: PropTypes.string,
};

export default Transaction;
