import React,{useState,useEffect} from 'react'
import {useParams,useNavigate, Link } from 'react-router-dom'
import {deletePost, getPost} from '../../services/api'
import Comments from './Comments/Comments'
import './styles.css'
import moment from 'moment'
import {FaTrash,FaEdit} from 'react-icons/fa'
import { toast } from 'react-toastify'
const DetailsView = () => {
    const {id} =  useParams();
    const navigate = useNavigate();
    const [post,setPost] = useState({})
    const picurl = post.pic ? post.pic :'https://images.unsplash.com/photo-1525772972514-aaadd39ad936?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG91dGRvb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

    useEffect(() => {
         const fetchPost = async () =>{
            try {
                const res = await getPost(id)
                setPost(res.data)

            } catch (error) {
                  console.log(error)
            }
         }
         fetchPost()

    }, [])

    const deletePostData = async () =>{
         try {
             
              await deletePost(post._id)
              toast.success('Post has been deleted successfully.')
              navigate('/')
         } catch (error) {
             console.log(error)
         }
    }
    return (
        <div>
            
             <Link className="nav-link goback" to="/">
               <span>&#8592;</span>Go Back
             </Link>
             {
                post ? 
                <div className='single-blog'>
                    <header>
                        <p className='blog-date'>Published {moment(post.createdAtt).format('MMMM dddd, YYYY')}</p>
                        <h1>{post.title}</h1>

                    </header>
                    <img src={picurl} alt="singleimg" />
                    <div className="action_btn">
                    <p className='desc'>{post.desc}</p>
                       <div style={{display:'flex', gap:'10px', justifyContent:'space-between', padding:'20px 0'}}>
                    <Link to={`/edit/${id}`}>
                    <FaEdit fontSize={20}/>
                    </Link>
                    <FaTrash 
                      color="tomato"
                      onClick={()=>deletePostData(post._id)} 
                      fontSize={20} style={{cursor:'pointer'}}/>
                       </div>
                    </div>
                </div> :
                <p>No Post Data Available</p>
             }
             <Comments post={post}/>

        </div>
    )
}

export default DetailsView
