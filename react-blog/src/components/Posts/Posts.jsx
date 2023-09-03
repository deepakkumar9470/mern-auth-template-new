import React,{useState,useEffect} from 'react'
import Post from '../Post/Post'
import {getAllPosts} from '../../services/api'
import  './styles.css'

const Posts = () => {

    const [posts,setPosts] = useState([])

    const fetchPosts = async()=>{
        try {
          const res = await getAllPosts()
          setPosts(res.data)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        fetchPosts()
      }, [])
   

    return (
        
       <div className='posts_lists'>
            {
                posts.length>0 ? 
                posts.map((post)=>(
                    <Post key={post._id} post={post}/>
                ))
                :
                (<p>No Post data available</p>)
            }
       </div>
        
        
    )
}

export default Posts
