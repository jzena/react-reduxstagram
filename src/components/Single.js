import React, { PureComponent } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends PureComponent {
  render() {
    const { params: { postId }, posts, comments } = this.props;
    const i = posts.findIndex((post) => post.code === postId);
    const post = posts[i];
    const postComments = comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
}

export default Single;
