import React, { Component } from 'react';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      comment: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { postId } = this.props.params;
    const { author, comment } = this.state
    this.props.addComment(postId, author, comment);
    this.resetState();
  }

  resetState = () => {
    this.setState({
      author: '',
      comment: ''
    });
  }

  renderComment = (comment, i) => {
    const { postId } = this.props.params;
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={() => this.props.removeComment(postId, i)}>&times;</button>
        </p>
      </div>
    )
  }

  render() {
    const { postComments } = this.props;
    const { author, comment } = this.state
    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input name="author" type="text" placeholder="author" value={author} onChange={this.handleChange} />
          <input name="comment" type="text" placeholder="comment" value={comment} onChange={this.handleChange}/>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;