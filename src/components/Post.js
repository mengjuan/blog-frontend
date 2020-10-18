import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({ post, excerpt }) => (

  <article className={excerpt ? 'post-excerpt' : 'post'}>
    <h2>{post.title}</h2>
    <p>{excerpt ? post.content.substring(0, 100) : post.content}</p>

    {excerpt && (
      <Link to={`/posts/${post.id}`} className="button">
        View Post
      </Link>
    )}
  </article>

)