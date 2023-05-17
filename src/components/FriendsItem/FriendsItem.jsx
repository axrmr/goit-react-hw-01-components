import PropTypes from 'prop-types';
import css from './FriendsItem.module.css';

const FriendsItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="78" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendsItem;
