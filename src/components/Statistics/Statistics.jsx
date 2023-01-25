import PropTypes from 'prop-types';
import {
  StatisticsMainTitle,
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
} from './Statistics.styled';

import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticsMainTitle>Statistics section</StatisticsMainTitle>
      <StatisticsContainer>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}

        <StatisticsList>
          {stats.map(stat => (
            <StatisticsListItem key={stat.id}>
              <StatisticsItem stat={stat} />
            </StatisticsListItem>
          ))}
        </StatisticsList>
      </StatisticsContainer>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
