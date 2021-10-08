import React from "react";
import { actionCreatorAddPost, actionCreatorCarrentMessage } from "../../../redax/State";
import s from './MyPosts.module.css';
import Post from "./Post/Post";





const MyPosts = (props) => {

  let mapPostDataMessage = props.state.postDataMessage.map( post => <Post message={post.message} likeCount={post.likeCount} /> );

  let newPost = React.createRef();

    let addPost = () => { 
    props.dispatch(actionCreatorAddPost());
    newPost.current.value = '';
  };

  let onPostClick = () => {
    let text = newPost.current.value;
    props.dispatch(actionCreatorCarrentMessage(text));
  };

    return (
        <div className={s.myPosts}>
            <div>
            My Post
            <div>
              <textarea ref={newPost} onChange={ onPostClick }  value={props.newPostText}></textarea>
              <button onClick={ addPost } >Add post</button>
            </div>
            {mapPostDataMessage}
          </div>
        </div>
    )
}

export default MyPosts;