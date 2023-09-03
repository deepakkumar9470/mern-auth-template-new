import axios from 'axios'

const url = 'http://localhost:5000/api/blog'


export const createPost = (post) =>{
     try {
         
          return axios.post(`${url}/create`, post)
     } catch (error) {
          console.log(error)
     }
}

export const getAllPosts = () =>{
     try {
         
          return axios.get(`${url}/posts`)
     } catch (error) {
          console.log(error)
     }
}

export const getPost = (id) =>{
     try {
         
          return axios.get(`${url}/posts/${id}`)
     } catch (error) {
          console.log(error)
     }
}

export const updatePost = (id,post) =>{
     try {
         
          return axios.put(`${url}/update/${id}`,post)
     } catch (error) {
          console.log(error)
     }
}

export const deletePost = (id) =>{
     try {
         
          return axios.delete(`${url}/posts/${id}`)
     } catch (error) {
          console.log('error..')
     }
}

export const uploadFile = (data) =>{
     try {
           
          return axios.post(`${url}/file/upload`, data)
     } catch (error) {
          console.log('error..')
     }
}





export const createComment = (post) =>{
     try {
         
          return axios.post(`${url}/comment/create`, post)
     } catch (error) {
          console.log('error..')
     }
}

export const getAllComments = () =>{
     try {
         
          return axios.get(`${url}/comments`)
     } catch (error) {
          console.log('error..')
     }
}


export const deleteComment = (id) =>{
     try {
         
          return axios.delete(`${url}/comment/${id}`)
     } catch (error) {
          console.log('error..')
     }
}



export const searchPost = ({data}) =>{
     try {
         
          return axios.post(`${url}/search` , {search : data})
     } catch (error) {
          console.log('error..')
     }
}
