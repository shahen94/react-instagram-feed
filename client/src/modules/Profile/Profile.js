import React, { Component, PropTypes } from 'react';
import { FeedComponents } from '../index';
import connect from './connect';

class Profile extends Component {
  static propTypes = {
    isSearchInputFocused: PropTypes.bool.isRequired,
    searchText: PropTypes.string.isRequired,
    focusSearchInput: PropTypes.func.isRequired,
    blurSearchInput: PropTypes.func.isRequired,
    searchTextChanged: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {
      isSearchInputFocused,
      searchText,
      focusSearchInput,
      blurSearchInput,
      searchTextChanged
    } = this.props;
    return (
      <div>
        <FeedComponents.Header
          blurSearchInput={blurSearchInput}
          focusSearchInput={focusSearchInput}
          searchText={searchText}
          searchTextChanged={searchTextChanged}
          isSearchInputFocused={isSearchInputFocused}
        />
      </div>
    );
  }
}

export default connect(Profile);
