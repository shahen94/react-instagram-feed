import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  reloadPosts,
  focusSearchInput,
  blurSearchInput,
  searchTextChanged,
  openModal,
  closeModal,
  fetchFeedItem,
} from './actions';

const mapStateToProps = (store) => ({
  posts: store.feed.posts,
  isLoading: store.feed.isLoading,
  isSearchInputFocused: store.feed.isSearchInputFocused,
  itemModal: store.feed.modal,
  search: store.feed.search,
});

const mapDispatchToProps = (dispatch) => ({
  reloadPosts: bindActionCreators(reloadPosts, dispatch),
  searchTextChanged: bindActionCreators(searchTextChanged, dispatch),
  focusSearchInput: bindActionCreators(focusSearchInput, dispatch),
  blurSearchInput: bindActionCreators(blurSearchInput, dispatch),
  openFeedItemModal: bindActionCreators(openModal, dispatch),
  closeFeedItemModal: bindActionCreators(closeModal, dispatch),
  fetchFeedItem: bindActionCreators(fetchFeedItem, dispatch),
});

export default function (Feed) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Feed);
}
