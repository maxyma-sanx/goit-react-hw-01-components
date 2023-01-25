import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <StatisticsItem stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
