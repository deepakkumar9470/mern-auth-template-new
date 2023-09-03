import React, { useState, useEffect } from "react";

import { createPost, uploadFile } from "../../services/api";
import {useNavigate  } from "react-router-dom";
import './style.css'
import { toast } from 'react-toastify';

const initialValues = {
  title: "",
  desc: "",
  pic: "",
  username: "dk397787",
  categories: "All",
  createdDate: Date.now(),
};

const AddPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(initialValues);


  const savePost = async (e) => {
    e.preventDefault()
    try {
      await createPost(post);
      toast.success('Blog Post added successfully..')
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="addpost">
        <h2>Add Blog Post</h2>
      <form onSubmit={savePost}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title..."
          onChange={handleChange}
        />

        <label htmlFor="pic">Photo Url</label>
        <input
          type="text"
          id="pic"
          name="pic"
          placeholder="Enter photo url..."
          onChange={handleChange}
        />

        <label htmlFor="desc">Description</label>
        <textarea
          cols={20}
          rows={5}
          id="desc"
          name="desc"
          placeholder="Enter description..."
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
