import * as React from 'react';

interface Props {
    posts: Array<any>
}
export default class Posts extends React.Component<Props, any> {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>{post.title}</li>
        )}
      </ul>
    )
  }
}
