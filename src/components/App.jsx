import { GlobalStyle } from './GlobalStyle/GlobalStyle';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { user, statistics, friends, transactions } from '../data/index';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </>
  );
};
