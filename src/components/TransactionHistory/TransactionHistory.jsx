import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.table_head}>Type</th>
          <th className={css.table_head}>Amount</th>
          <th className={css.table_head}> Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.table_data}>{item.type}</td>
            <td className={css.table_data}>{item.amount}</td>
            <td className={css.table_data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
}