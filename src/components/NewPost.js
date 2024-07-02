import React from "react";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import {useStoreState, useStoreActions} from 'easy-peasy'

const NewPost = () => {
  const navigate = useNavigate();
  const posts = useStoreState(state=> state.posts);
  const postTitle = useStoreState(state=> state.postTitle);
  const postBody = useStoreState(state=> state.postBody);
  const savePost = useStoreActions(action=> action.savePost);
  const setPostTitle = useStoreActions(action=> action.setPostTitle);
  const setPostBody = useStoreActions(action=> action.setPostBody);


  function handleSubmit(e) {
    e.preventDefault();
    const id = posts.length ? (parseFloat(posts[posts.length - 1].id) + 1).toString() : '1';
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    savePost(newPost);
    navigate('/');
  }
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
