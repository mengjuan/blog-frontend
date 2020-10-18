export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPosts = () => ({ type: GET_POSTS})

export const getPostsSuccess =  posts => ({
	type: GET_POSTS_SUCCESS,
	payload: posts
})

export const getPostsFailure = () => ({type: GET_POSTS_FAILURE})

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch('http://47.104.167.167/blog-service/api/articles')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}