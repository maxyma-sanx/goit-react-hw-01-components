import PropTypes from 'prop-types';
import { StatisticsLabel, StatisticsPercentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ stat: { label, percentage } }) => {
  return (
    <>
      <StatisticsLabel>{label}</StatisticsLabel>
      <StatisticsPercentage>{percentage}%</StatisticsPercentage>
    </>
  );
};

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
