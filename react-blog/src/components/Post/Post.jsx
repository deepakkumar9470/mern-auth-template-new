
import React from 'react';
import  './styles.css'
import { Link } from 'react-router-dom';
import moment from 'moment';
const Post = ({post}) => {

  const url = post.pic || 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  
      const addEllipsis = (str,limit) =>{
        return str.length > limit ? str.substring(0, limit) + '...' : str;
       };
  return (
    <div className='postitems'>
      <img src={url} alt="post-img" className="post-image" />
       <h3>{post.title}</h3>
       <p className='desc'>{addEllipsis(post.desc,20)}</p>
       <div className='username_wrapper'>
         <Link className='nav-link' to={`details/${post._id}`}>
          <button className='readmore'>ReadMore</button>
          </Link>
          <img src={url} alt="username" />
          <div style={{display:'flex', flexDirection:'column'}}>
          <span className="user">{post.username}</span>
          <span className="date">{moment(post.createdAt).format('dddd MM , YYYY')}</span>
          </div>
          
       </div>

    </div>
  );
}

export default  Post;