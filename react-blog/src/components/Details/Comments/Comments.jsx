import React, { useState, useEffect } from "react";

import { createComment, getAllComments } from "../../../services/api";
import Comment from "./Comment";
import './style.css'
const initialValues = {
  name: "",
  postId: "",
  comments: "",
  date: Date.now(),
};

const Comments = ({ post }) => {
  const [comment, setComment] = useState(initialValues);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getCommentsData = async () => {
      try {
        const res = await getAllComments()
        setComments(res.data);
      } catch (error) {}
    };
    getCommentsData();
  }, [post, toggle]);

  const onValueChange = (e) => {
    setComment({
      ...comment,
      name: post.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const postComment = async () => {
    try {
       const res = await createComment(comment) 
       setComment('')
       setToggle((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comments_wrap">
      <div className="textarea_wrap">
        <textarea
          cols="25" 
          rows="5"
          onChange={(e) => onValueChange(e)}
          placeholder="Tell your story here ...."
        />

        <button className="post_Btn" onClick={postComment}>Comment</button>
      </div>
      {comments &&
        comments.map((cmnts) => (
          <Comment key={cmnts._id} comment={cmnts} setToggle={setToggle} />
        ))}
    </div>
  );
};

export default Comments;
