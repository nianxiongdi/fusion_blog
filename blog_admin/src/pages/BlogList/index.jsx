
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Pagination, Button } from '@alifd/next';
import { connect } from 'react-redux';
import moment from 'moment';
import './index.scss';
import {
  getBlogList,
  deleteBlogById,
} from '../../redux/blog.redux';

@connect(
  state => state.blog,
  { getBlogList, deleteBlogById }
)
class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  componentWillMount() {
    this.getBlogList();
  }


  getBlogList(num = 1) {
    const params = {
      offset: (num - 1) * 5,
      limit: 5,
      tags: '',
      catalog_id: '',
      order: 'DESC',
    };
    // console.log(this.props);
    this.props.getBlogList(params);
  }

  change(value) {
    console.log(value);
    this.getBlogList(value);
  }

  formateDate(date) {
    return moment(new Date(date)).format('YYYY-MM-DD');
  }

  render() {
    console.log(this.props);
    console.log('bloglist');
    const { content, totalElements } = this.props;
    console.log(content);
    return (<div className="blog">
      <ul className="blog-ul">

        {
          content && content.map(item => (
            <li className="blog-ul-li">
              <div className="list">
                <div className="content">
                  <div className="content-title" >
                    <span>{item.title}</span>
                  </div>
                  <div className="content-des">
                    <span>{item.summary}</span>
                  </div>

                  <ul className="content-ul">
                    <li className="content-ul-li"><Icon type="smile" />{item.commentSize} |</li>
                    <li className="content-ul-li"><Icon type="set" /> {item.tags} |</li>
                    <li className="content-ul-li"><Icon type="atm" /> {item.name}</li>
                  </ul>
                </div>
                <div className="btn">
                  <Button type="normal" onClick={() => this.props.history.push(`/app/blog/edit/${item.id}`)}>编辑</Button> <br />
                  <Button type="primary" onClick={() => { this.props.deleteBlogById(1, item.id); }}>删除</Button>

                </div>
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
