import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { Transactions } from './TransactionsHistory/TransactionHistory';

import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
