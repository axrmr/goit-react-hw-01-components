import PropTypes from 'prop-types';
import FriendsItem from '../FriendsItem/FriendsItem';
import css from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendsItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
