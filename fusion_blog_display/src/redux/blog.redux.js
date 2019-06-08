import axios from 'axios'
import {  Message } from '@alifd/next';
/**
 * action type
 */
const LIST_SUCCESS = 'LIST_SUCCESS'
const LIST_FAILURE = 'LIST_FAILURE'
const DESC_SUCCESS = 'DESC_SUCCESS'
const DESC_FAILURE = 'DESC_FAILURE'
const COMMENT_SUCCESS = 'COMMENT_SUCCESS'
const COMMENT_FAILURE = 'COMMENT_FAILURE'
/**
 * state
 */
const initState = {
  content: '',
  msg: '',
  tags: '',
  desc: '',
  commentSize: '',
  totalElements: 0
}

/**
 * reducer
 * @param {*} state
 * @param {*} action
 */
export function blog(state=initState, action) {

  switch(action.type) {
    case LIST_SUCCESS:
        console.log(action)
  console.log('-action')
      return {
        ...state,
        content: action.payload.data.rows,
        msg: action.payload.msg,
        totalElements: action.payload.data.count
      }
    case DESC_SUCCESS:
      return {
        ...state,
        desc: action.payload.data.blog,
        comments: action.payload.data.comments,
        tags: action.payload.data.tags,
        msg: action.payload.msg
      }
    case COMMENT_SUCCESS:
      // console.log(state);
      // console.log(state.comments);
      // console.log('-COMMENT_SUCCESS-')
      return {
        ...state,
        commentSize: state.comments.push({
          id: action.payload.id,
          content: action.payload.content,
          created_at: +Date.now(),
          username: action.payload.username,
        })
      }
    case LIST_FAILURE:
    case DESC_FAILURE:
    case COMMENT_FAILURE:
      return {
        ...state,
        msg: action.payload
      }
    default:
      return state
  }
}

/**
 * action type
 */

function listSuccess(data) {
  return {
    type: LIST_SUCCESS,
    payload: data
  }
}

function listFailure(data) {
  return {
    type: LIST_FAILURE,
    payload: data
  }
}

function descSuccess(data) {
  return {
    type: DESC_SUCCESS,
    payload: data
  }
}

function descFailure(data) {
  return {
    type: DESC_FAILURE,
    payload: data
  }
}

function commentSuccess(data,) {
  return {
    type: COMMENT_SUCCESS,
    payload: data.data
  }
}

function commentFailure(data) {
  return {
    type: COMMENT_FAILURE,
    payload: data
  }
}

/**
 * aysnc function
 */

export function getBlogList({
  offset,
  limit,
  tags,
  catalog_id,
  order
}) {
  return dispatch => {
    axios.get('/api/blog', {
      params: {
        offset,
        limit,
        tags,
        catalog_id,
        order
      }
    })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          // console.log(res);
          dispatch(listSuccess(res.data))
        } else {
          dispatch(listFailure(res.data.msg))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function getBlogDesc(id) {
  return dispatch => {
    axios.get(`/api/blog/${id}`)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          // console.log(res);
          // console.log('[][][][]')
          dispatch(descSuccess(res.data))
        } else {
          dispatch(descFailure(res.data.message))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function createComment({
  blog_id,
  user_id,
  content,
  username
}) {
  return dispatch => {
    // console.log(username);
    axios.post('/api/users/comment', {
      blog_id,
      user_id,
      content,
      username
    })
    .then(res => {
      console.log(res);
      if(res.status === 200 && res.data.code === 0) {
        Message.success('评论成功~')
        console.log(res);
        console.log('~~success');
        dispatch(commentSuccess(res.data))
      } else {
        Message.error(res.data.msg)
        // console.log('+++++++++++')
        dispatch(commentFailure(res.data.msg))
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}
