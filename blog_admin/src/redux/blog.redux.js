import axios from 'axios';
import {
  Message,
} from '@alifd/next';
/**
 * action type
 */
const LIST_SUCCESS = 'LIST_SUCCESS';
const LIST_FAILURE = 'LIST_FAILURE';
const DELETE_SUCCESS = 'LIST_FAILURE';
const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS';
const FIND_SUCCESS = 'FIND_SUCCESS';


/**
 * state
 */
const initState = {
  content: '',
  msg: '',
  tags: '',
  desc: '',
  commentSize: '',
  totalElements: 0,
};

/**
 * reducer
 * @param {*} state
 * @param {*} action
 */
export function blog(state = initState, action) {
  switch (action.type) {
    case LIST_SUCCESS:
      return {
        ...state,
        content: action.payload.data.rows,
        msg: action.payload.msg,
        totalElements: action.payload.data.count,
      };
    case DELETE_SUCCESS :
      return {
        ...state,
        content: state.content.filter(item => item.id !== action.payload), // 过滤掉删除的显示
      };
    case PUBLISH_SUCCESS:
      return {
        ...state,
        msg: action.payload,
      };
    case FIND_SUCCESS:
      return {
        ...state,
        blog: action.payload,
      };
    default:
      return state;
  }
}

/**
 * action type
 */

function listSuccess(data) {
  return {
    type: LIST_SUCCESS,
    payload: data,
  };
}

function listFailure(data) {
  return {
    type: LIST_FAILURE,
    payload: data,
  };
}

function deleteSuccess(id) {
  return {
    type: DELETE_SUCCESS,
    payload: id,
  };
}
function publishSuccess(msg) {
  return {
    type: PUBLISH_SUCCESS,
    payload: msg,
  };
}

function findSuccess(blog) {
  return {
    type: FIND_SUCCESS,
    payload: blog,
  };
}


/**
 * aysnc function
 */

export function getBlogList({
  offset,
  limit,
  tags,
  catalog_id,
  order,
}) {
  return (dispatch) => {
    axios.get('/api/blog', {
      params: {
        offset,
        limit,
        tags,
        catalog_id,
        order,
      },
    })
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          // console.log(res);
          dispatch(listSuccess(res.data));
        } else {
          dispatch(listFailure(res.data.msg));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getBlogDesc(id) {
  return (dispatch) => {
    axios.get(`/api/blog/${id}`)
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(descSuccess(res.data));
        } else {
          dispatch(descFailure(res.data.message));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function createComment({
  blog_id,
  user_id,
  content,
  username,
}) {
  return (dispatch) => {
    axios.post('/api/users/comment', {
      blog_id,
      user_id,
      content,
    })
      .then((res) => {
        if (res.status === 201 && res.data.code === 0) {
          dispatch(commentSuccess(res.data, content, username));
        } else {
          dispatch(commentFailure(res.data.message));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}


export function deleteBlogById(user_id = 1, id) {
  console.log(id);
  return (dispatch) => {
    axios.delete(`/api/users/${user_id}/blog/${id}`)
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(deleteSuccess(id));
        }
      });
  };
}

export function publish(blog) {
  const { title,
    summary,
    content,
    tags,
    catalog_id,
    user_id } = blog;
  return (dispatch) => {
    axios.post('/api/blog', {
      title,
      summary,
      content,
      tags,
      catalog_id,
      user_id,
    }).then((res) => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(publishSuccess(res.data.msg));
        Message.success(res.data.msg);
      }
    });
  };
}


export function findBlogById(id) {
  return (dispatch) => {
    axios.get(`/api/blog/edit/${id}`)
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          console.log(res.data.data);
          return dispatch(findSuccess(res.data.data.blog));
        // dispatch(publishSuccess(res.data.msg));
        // Message.success(res.data.msg)
        }
      });
  };
}

