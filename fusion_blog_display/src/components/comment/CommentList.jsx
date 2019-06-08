import React from 'react'
import ReactDOM from 'react-dom'
import { Icon, Pagination } from '@alifd/next';
import { connect } from 'react-redux'
import moment from 'moment'
import { getDateDiff } from '../../utils/utils'

import './index.scss'

@connect(
  state => state.blog,
)
class CommentList extends React.Component {

  constructor(props) {
    super(props)
    this.change = this.change.bind(this);
  }

  change(value) {
    console.log(value);
    this.getBlogList(value)
  } ;

  formateDate(date) {
    return moment(new Date(date)).format("YYYY-MM-DD");
  }

  render() {
    // console.log(this.props)
    // console.log('====')

    // const { desc:{comment}, totalElements } = this.props;
    const { comments, totalElements } = this.props;
    console.log(this.props);
    console.log('-comment-');
    return (<div className="blog">
        <ul className="blog-ul">

          {
            comments && comments.map( item =>(
              <li className="blog-ul-li">
              <div className="content">
                <div className="content-title"  >
                  <span>{ item.username }</span>
                  <span className="content-date">{ getDateDiff( item.created_at ) }</span>
                 </div>
                 <div className="content-des">
                    <span>{item.content }</span>
                 </div>

                 {/* <ul className="content-ul">
                   <li className="content-ul-li"><Icon type="smile" />{ } |</li>
                   <li className="content-ul-li"><Icon type="set" /> { } |</li>
                   <li className="content-ul-li"><Icon type="atm" /> {  }</li>
                 </ul> */}

              </div>
            </li>
             ))
          }

        </ul>

    </div>);
  }


}

export default CommentList;
