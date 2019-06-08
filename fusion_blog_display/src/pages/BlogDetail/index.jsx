
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getBlogDesc } from '../../redux/blog.redux'
import marked from 'marked'
import hljs from 'highlight.js'
import Navigation from './navigation'
import Comment from '../../components/comment'
import {
  timetrans,
  color
} from '../../utils/utils'
import {
  Card,
  Icon,
  Tag,
  Grid
} from '@alifd/next'
const { Row, Col } = Grid;
import './desc.scss'

@connect(
  state => state.blog,
  { getBlogDesc }
)
class BlogDetail extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      loading: true
    }
  }
  componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value
    })
  }
  componentDidMount() {
    this.props.getBlogDesc(this.state.id)
    this.setState({
      loading: !this.state.loading
    })
  }
  render() {
    // console.log(this.props.desc.content);
    // console.log(this.props);
    console.log(']]]]]');
    const IconText = ({ type, text }) => (
      <span key={text}>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )
    if (this.props.desc.title) {
      document.title = this.props.desc.title
    }
    return (
      <Row  >
        <Col
          lg={{ span: 15, offset: 1 }}
          md={{ span: 15, offset: 1 }}
          xs={{ span: 24 }}
        >
          <Card
            className="article-wrapper"
            loading={this.state.loading}
            title={this.props.desc.title}
            contentHeight='auto'
            extra={[
              <Tag key="author">
                作者：admin
              </Tag>,
              <span style={{marginTop: 10}} key="time">
                {
                  this.props.desc.created_at
                  ? timetrans(this.props.desc.created_at)
                  : null
                }
              </span>
            ]}
          >
            <div className="article-tags">
              <span>{this.props.desc.readSize} 次浏览</span>
              {/* <IconText type="shuqianbookmarks" text={
                this.props.tags.split(',').map(v => (
                  <Tag
                    key={v}
                    color={color[Math.floor(Math.random()*color.length)]}
                    onClick={()=>{}}
                  >
                    {v}
                  </Tag>
                ))}
              /> */}
            </div>
            <div
              className="article-detail"

              dangerouslySetInnerHTML={{ __html: this.props.desc.content ? marked(this.props.desc.content) : null }}
            />
          </Card>
          <Comment />
        </Col>
        <Col
          lg={{ span: 10,   }}
          md={{ span: 10,   }}
          xs={{ span: 10 }}
        >
          {
            this.props.desc.content ?
            <Card title="目录"
              className="catalog"
              contentHeight='auto'
              style={{position: 'fixed'}}>
                <Navigation content={this.props.desc.content}/>
            </Card>
            : null
          }
        </Col>
      </Row>

    )
  }


}

export default BlogDetail;
