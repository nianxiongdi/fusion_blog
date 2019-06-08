import React  from 'react'
import { connect } from 'react-redux'

import { createComment } from '../../redux/blog.redux'
import AddComment  from './AddComment'
import CommentList  from './CommentList'

@connect(
  state => state.blog,
  { createComment }
)
class Commment extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddComment
          createComment={this.props.createComment}/>
        <CommentList />
      </div>
    );
  }


}


export default Commment;


