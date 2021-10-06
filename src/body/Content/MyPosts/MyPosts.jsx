import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {

  let mapPostDataMessage = props.state.postDataMessage.map( post => <Post message={post.message} likeCount={post.likeCount} /> );

    return (
        <div className={s.myPosts}>
            <div>
            My Post
            <div>
              <textarea></textarea>
              <button>Add post</button>
              <button>Remove</button>
            </div>
            {mapPostDataMessage}
          </div>
        </div>
    )
}

export default MyPosts;