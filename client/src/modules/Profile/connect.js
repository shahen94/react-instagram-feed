import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  focusSearchInput,
  blurSearchInput,
  searchTextChanged
} from './actions';

const mapStateToProps = (state) => ({
  isSearchInputFocused: state.profile.isSearchInputFocused, // we also can use state.feed....
  searchText: state.profile.searchText // we also can use state.feed.searchText
});

const mapDispatchToProps = (dispatch) => ({
  focusSearchInput: bindActionCreators(focusSearchInput, dispatch),
  blurSearchInput: bindActionCreators(blurSearchInput, dispatch),
  searchTextChanged: bindActionCreators(searchTextChanged, dispatch)
});

export default function (Profile)  {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile);
}
