import Profile from './profile/profile';
import user from '../components/user.json';
import Section from '../components/section/section';
import data from '../components/data.json';
import Statistics from '../components/statistics/staistics';
import friends from '../components/friends.json';
import Friends from './friendlist/friendlist';
import TransactionHistory from './transactionhistory/transaction-history';
import transaction from '../components/transaction.json';

export const App = () => {
  return (
    <div>
      <Section title="Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Statistics">
        <Statistics title="Upload stats" items={data} />
      </Section>

      <Section title="FriendList">
        <Friends items={friends} />
      </Section>

      <Section title="TransactionHistory">
        <TransactionHistory items={transaction} />
      </Section>
    </div>
  );
};
