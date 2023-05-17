import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <section className={css.stats}>
      <h2 className="title">{title}</h2>

      <ul className={css.statsList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className="item"
            style={{
              backgroundColor: [getRandomHexColor()],
            }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};

export default Statistics;
