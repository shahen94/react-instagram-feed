import React, { PropTypes } from 'react';
import styles from './styles.styl';

export const SearchBoxItem = ({ data }) => (
  <div className={styles.item}>
    <span>{data.name}</span>
  </div>
);

SearchBoxItem.propTypes = {
  data: PropTypes.object
};

SearchBoxItem.defaultProps = {
  data: {}
};
