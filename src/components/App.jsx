import { Profile } from './Profile/Profile';
import user from '../data/user';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data';

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
