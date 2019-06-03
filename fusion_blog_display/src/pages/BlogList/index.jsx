
import React from 'react'
import ReactDOM from 'react-dom'
import { Icon, Pagination } from '@alifd/next';
import { connect } from 'react-redux'
import moment from 'moment'
import './index.scss'
import {
  getBlogList
} from '../../redux/blog.redux'

@connect(
  state => state.blog,
  { getBlogList }
)
class BlogList extends React.Component {

  constructor(props) {
    super(props)
    this.change = this.change.bind(this);
  }

  componentWillMount() {
    this.getBlogList();
  }


  getBlogList(num=1) {
    let params = {
      offset: (num-1)*5,
      limit: 5,
      tags:   '',
      catalog_id:   '',
      order: 'DESC',
    }
    // console.log(this.props);
    this.props.getBlogList(params)
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

    const { content, totalElements } = this.props;
    return (<div className="blog">
        <ul className="blog-ul">

          {
            content && content.map( item =>(
              <li className="blog-ul-li">
              <div className="content">
                <div className="content-title" onClick={()=>this.props.history.push(`/app/blog/detail/${item.id}`)}>
                  <span>{item.title}</span>
                  <span className="content-date">{ this.formateDate( item.created_at) }</span>
                 </div>
                 <div className="content-des">
                    <span>{item.summary}</span>
                 </div>

                 <ul className="content-ul">
                   <li className="content-ul-li"><Icon type="smile" />{item.commentSize} |</li>
                   <li className="content-ul-li"><Icon type="set" /> {item.tags} |</li>
                   <li className="content-ul-li"><Icon type="atm" /> {item.catalog.name}</li>
                 </ul>

              </div>
            </li>
             ))
          }

        </ul>
        <Pagination className="blog-pagination" defaultCurrent={1} pageSize={5} onChange={this.change} total={totalElements} />,

    </div>);
  }


}

export default BlogList;
