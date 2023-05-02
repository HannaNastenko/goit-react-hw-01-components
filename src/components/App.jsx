import { Profile } from '../components/Profile'
import user from './Profile/user.json';
import { Statistics } from '../components/Statistics';
import data from "./Statistics/data.json"
import { FriendList } from '../components/FriendList';
import friends from './FriendList/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/TransactionHistory/transactions.json'



export const App = () => {
  return (
    <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </>
  );
};
