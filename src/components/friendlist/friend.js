import PropTypes from 'prop-types';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className="item-friend">
      <span className={`status status-${isOnline}`}></span>
      <img
        className="avatar-friend"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name-friend">{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friend;
