import React from 'react'
import {deleteComment} from '../../../services/api'
import {FaTrashAlt} from 'react-icons/fa'
import moment from 'moment';



const Comment = ({comment,setToggle}) => {
  

    const removeComment = async () =>{
           try {
                await deleteComment(comment._id)
                setToggle(prev => !prev)
           } catch (error) {
             console.log(error)   
           }
      };

    return (
        <div className='comment_wrap'>
       
            <div className='inner_comment'>
                <h3 className="c_name">{comment.name}</h3>
                <h5 className="c_date">{moment(comment.createdAt).format('MMMM dddd, YYYY')}</h5>
                <FaTrashAlt color="tomato" style={{cursor:'pointer'}} onClick={() => removeComment()}/>
            </div>
            <p className="c_desc">{comment.comments}</p>

    </div>
    )
}

export default Comment
