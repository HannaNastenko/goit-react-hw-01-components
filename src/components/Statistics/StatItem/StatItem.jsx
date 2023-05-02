import PropTypes from 'prop-types';
import css from '../Statistics.module.css'


export const StatItem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}