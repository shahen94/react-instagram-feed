import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import styles from './styles.styl';
import { SearchResult } from '../SearchResult';


export const Header = ({
  isSearchInputFocused,
  focusSearchInput,
  blurSearchInput,
  searchTextChanged,
  searchText,
  searchError,
  searchLoading,
  searchResult
}) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div>
        <i className="fa fa-instagram fa-2x "/>
        {' | '}
        <span>Instagram</span>
      </div>
      <div>
        { isSearchInputFocused ? (
          <input
            type={'text'}
            onChange={(e) => searchTextChanged(e.target.value)}
            onBlur={blurSearchInput}
            placeholder="search"
            autoFocus={true}
            value={searchText}
          />
        ) : (
          <div
            className={styles.searchInputImitation}
            onClick={focusSearchInput}
          >
            <i className="fa fa-search" />
            <span>{ searchText || 'Search' }</span>
          </div>
        ) }
      </div>
      <div className={styles.notifications}>
        <Link to="/notifications" className={styles.a}>
          <i className="fa fa-deaf fa-2x" />
        </Link>
        <Link to="/feed" className={styles.a}>
          <i className="fa fa-compass fa-2x" />
        </Link>
        <Link to="/profile" className={styles.a}>
          <i className="fa fa-user fa-2x" />
        </Link>
      </div>
    </div>
    <SearchResult
      error={searchError}
      result={searchResult}
      loading={searchLoading}
      visible={isSearchInputFocused && searchText}
    />
  </header>
);

Header.propTypes = {
  isSearchInputFocused: PropTypes.bool.isRequired,
  focusSearchInput: PropTypes.func.isRequired,
  blurSearchInput: PropTypes.func.isRequired,
  searchTextChanged: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  searchResult: PropTypes.array.isRequired,
  searchError: PropTypes.any,
  searchLoading: PropTypes.bool.isRequired,
};
