import PropTypes from 'prop-types';

const Statistic = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

// Statistic.PropTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.string.isRequired,
// };

export default Statistic;
