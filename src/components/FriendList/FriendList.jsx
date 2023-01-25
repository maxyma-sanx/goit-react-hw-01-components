import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import { FriendsTitle, FriendsList, FriendsItem } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <FriendsTitle>Friends list</FriendsTitle>
      <FriendsList>
        {friends.map(friend => (
          <FriendsItem key={friend.id}>
            <FriendItem friend={friend} />
          </FriendsItem>
        ))}
      </FriendsList>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
