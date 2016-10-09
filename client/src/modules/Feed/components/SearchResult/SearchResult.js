import React, { PropTypes } from 'react';
import styles from './styles.styl';
import { SearchBoxItem } from '../SearchBoxItem';

const renderLoading = () => (
  <div>
    <span>loading</span>
  </div>
);

const renderNotFound = () => (
  <div>
    <span>
      Not Found
    </span>
  </div>
);

const renderError = (error) => (
  <div>
    <h3>{error.message || error}</h3>
  </div>
);

const renderContent = (result) => (
  result.map((res, i) => (
    <SearchBoxItem data={res} key={res.id || i} />
  ))
);

export const SearchResult = ({
  result,
  error,
  loading,
  visible
}) => (
  <div
    className={styles.container}
    style={{
      display: visible ? 'flex' : 'none'
    }}
  >
    {loading ?
      renderLoading() : (
        result.length === 0 ?
        renderNotFound() :
        renderContent(result)
      )
    }
  </div>
);


SearchResult.proptypes = {
  visible: PropTypes.bool.isRequired,
  result: PropTypes.array.isRequired,
  error: PropTypes.any,
  loading: PropTypes.bool.isRequired,
}
