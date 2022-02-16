import Statistic from './statistic';
import PropTypes from 'prop-types';
import './statistics.css';

export default function Statistics({ title, items }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul class="stat-list">
        {items.map(item => (
          <Statistic label={item.label} percentage={item.percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
