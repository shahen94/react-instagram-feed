import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Header, FeedItem, FeedItemModal } from './components';
import connect from './connect';
import styles from './styles.styl';

class Feed extends Component {
  static propTpes = {
    posts: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    reloadPosts: PropTypes.func.isRequired,
    itemModal: PropTypes.shape({
      item: PropTypes.object.isRequired,
      visible: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired,
      error: PropTypes.any.isRequired,
    }).isRequired,
    search: PropTypes.shape({
      text: PropTypes.string.isRequired,
      result: PropTypes.array.isRequired,
      loading: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    }).isRequired,
    openFeedItemModal: PropTypes.func.isRequired,
    closeFeedItemModal: PropTypes.func.isRequired,
    focusSearchInput: PropTypes.func.isRequired,
    blurSearchInput: PropTypes.func.isRequired,
    searchTextChanged: PropTypes.func.isRequired,
    isSearchInputFocused: PropTypes.bool.isRequired,
  };
  constructor(props, context) {
    super(props, context);
    this.renderContent = ::this.renderContent;
  }

  componentWillMount() {
    this.props.reloadPosts();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderContent() {
    const {
      posts,
      isLoading,
      openFeedItemModal
    } = this.props;

    if (isLoading && posts.length === 0) {
      return (
        <div>
          <span>
            Please wait...
          </span>
        </div>
      );
    }
    if (posts.length === 0) {
      return (
        <div>
          <span>
            Posts 404 Not found
          </span>
        </div>
      );
    }

    return posts.map((post) => (
      <FeedItem
        key={post.id} {...post}
        openFeedItemModal={openFeedItemModal}
      />
    ));
  }

  render() {
    const {
      posts,
      blurSearchInput,
      focusSearchInput,
      isSearchInputFocused,
      searchTextChanged,
      search,
      itemModal,
      closeFeedItemModal
    } = this.props;

    return (
      <div>
        <Header
          blurSearchInput={blurSearchInput}
          focusSearchInput={focusSearchInput}
          isSearchInputFocused={isSearchInputFocused}
          searchTextChanged={searchTextChanged}
          searchError={search.error}
          searchLoading={search.loading}
          searchResult={search.result}
          searchText={search.text}
        />
        <div className={styles.container}>
          {this.renderContent()}
        </div>
        <FeedItemModal
          post={itemModal.item}
          visible={itemModal.visible}
          loading={itemModal.loading}
          error={itemModal.error}
          closeModal={closeFeedItemModal}
        />
      </div>
    );
  }
}

export default connect(Feed);
