import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentActions from '../actions/commentActions';
import * as likeActions from '../actions/likeActions';
import Main from './Main';

const App = connect(
  state => ({
    posts: state.posts,
    comments: state.comments
  }),
  dispatch => (
    Object.assign(
      bindActionCreators(commentActions, dispatch),
      bindActionCreators(likeActions, dispatch)
    )
  )
)(Main);

export default App;