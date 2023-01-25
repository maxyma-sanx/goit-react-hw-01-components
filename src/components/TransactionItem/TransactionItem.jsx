import PropTypes from 'prop-types';
import { TransactionTableCeil } from './TransactionItem.styled';

export const TransactionItem = ({
  transaction: { type, amount, currency },
}) => {
  return (
    <>
      <TransactionTableCeil>{type}</TransactionTableCeil>
      <TransactionTableCeil>{amount}</TransactionTableCeil>
      <TransactionTableCeil>{currency}</TransactionTableCeil>
    </>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
