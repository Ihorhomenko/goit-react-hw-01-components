import Profile from './profile/profile';
import user from '../components/user.json';
import Section from '../components/section/section';
import data from '../components/data.json';
import Statistics from '../components/statistics/staistics';

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
    </div>
  );
};
