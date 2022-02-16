import PropTypes from 'prop-types';
import Friend from './friend';
import './friendlist.css';

const Friends = ({ items }) => {
  return (
    <ul className="friend-list">
      {items.map(item => (
        <Friend
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

export default Friends;
