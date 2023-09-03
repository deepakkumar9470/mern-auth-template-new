import React,{useState,useEffect} from 'react'
import {useParams,useNavigate } from 'react-router-dom'
import {getPost, updatePost} from '../../services/api'
import {toast} from 'react-toastify'

const EditPost = () => {
    const {id}  = useParams()
    const navigate  = useNavigate()
    const [post,setPost] = useState({
      title: '',
      desc:'',
      pic:''
    })
  

    useEffect(() => {
         const fectchPost = async () =>{
            try {                
                const res = await getPost(id)
                setPost(res.data)

            } catch (error) {
                  console.log(error)
            }
         }
         fectchPost()

    }, [id])



    const updatePostData = async (e) =>{     
               e.preventDefault()
               try {
                await updatePost(id , post);
                toast.success('Post updated successfully')
                navigate(`/`) 
                
               } catch (error) {
                
               }     
    };

    const handleChange = (e) =>{
        setPost({...post, [e.target.name] : e.target.value})
    }

    console.log('edit',post)
    
    return (
        <div className="addpost">
        <h2>Edit Blog Post</h2>
      <form onSubmit={updatePostData}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={post.title}
          name="title"
          placeholder="Enter title..."
          onChange={handleChange}
        />

        <label htmlFor="pic">Photo Url</label>
        <input
          type="text"
          id="pic"
          value={post.pic}
          name="pic"
          placeholder="Enter photo url..."
          onChange={handleChange}
        />

        <label htmlFor="desc">Description</label>
        <textarea
          cols={20}
          value={post.desc}
          rows={5}
          id="desc"
          name="desc"
          placeholder="Enter description..."
          onChange={handleChange}
        />

        <button  
       
        type="submit">Edit</button>
      </form>
    </div>
    )
}

export default EditPost
