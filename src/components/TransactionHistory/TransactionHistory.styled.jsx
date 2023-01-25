import styled from 'styled-components';

export const TransactionTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  text-align: center;
`;

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 500px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
`;

export const TransactionTableHead = styled.th`
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: darkturquoise;

  :not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const TransactionTableRow = styled.tr`
  background-color: ${({ index }) => (index % 2 === 0 ? '#fff' : 'lightgrey')};
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: darkgrey;
  }
`;
