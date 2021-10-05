import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div>
            My Post
            <div>
              <textarea></textarea>
              <button>Add post</button>
              <button>Remove</button>
            </div>
            <Post />
            <Post />
          </div>
        </div>
    )
}

export default MyPosts;