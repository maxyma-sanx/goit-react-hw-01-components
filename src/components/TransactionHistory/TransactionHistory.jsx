import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableRow,
  TransactionTitle,
} from './TransactionHistory.styled';

import { TransactionItem } from '../TransactionItem/TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <TransactionTitle>Transaction History</TransactionTitle>
      <TransactionTable>
        <thead>
          <tr>
            <TransactionTableHead>Type</TransactionTableHead>
            <TransactionTableHead>Amount</TransactionTableHead>
            <TransactionTableHead>Currency</TransactionTableHead>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <TransactionTableRow key={transaction.id} index={index}>
                <TransactionItem transaction={transaction} />
              </TransactionTableRow>
            );
          })}
        </tbody>
      </TransactionTable>
    </>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
