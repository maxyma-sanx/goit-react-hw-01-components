import PropTypes from 'prop-types';
import {
  ProfileTitle,
  ProfileCard,
  ProfileDescr,
  ProfileImg,
  ProfileName,
  ProfileText,
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <>
      <ProfileTitle>Social network profile</ProfileTitle>
      <ProfileCard>
        <ProfileDescr>
          <ProfileImg src={avatar} alt={username} />
          <ProfileName>{username}</ProfileName>
          <ProfileText>@{tag}</ProfileText>
          <ProfileText>{location}</ProfileText>
        </ProfileDescr>

        <ProfileStats>
          <ProfileStatsItem>
            <ProfileStatsLabel>Followers</ProfileStatsLabel>
            <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Views</ProfileStatsLabel>
            <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Likes</ProfileStatsLabel>
            <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
          </ProfileStatsItem>
        </ProfileStats>
      </ProfileCard>
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
