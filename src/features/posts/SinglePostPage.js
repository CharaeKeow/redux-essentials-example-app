import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButton'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  // Component will re-render any time the value returned from `useSelector` changes to a new reference
  // Therefore, components should always try to select the smallest possible amount of data needed from the store
  // which will ensure that it will re-render only when needed
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  //Handling if no post is found
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  //If found, render the page
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}