import React from 'react'
import { Link } from 'react-router-dom'



const Banner = () => {
    
    return (
         
  
    <div className="container">
	<div className="row py-4 py-lg-6">
		<div className="col-lg-4 order-lg-2 d-flex align-items-center justify-content-center justify-content-lg-start ms-lg-n6">
			<div style={{zIndex:1}} className="lc-block col-6 col-lg-10 mb-n3 mb-lg-0">
				<img className="img-fluid shadow" src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="banner pic"/>
			</div>
		</div>
		<div className="col-lg-7 bg-light px-lg-5 p-4">
			<div className="col-lg-10 ms-lg-5">
				<div className="lc-block mb-4">
					<div editable="rich">
						<h1 className="rfs-30">Daily blogs. Post your blogs here</h1>
					</div>
				</div>
				<div className="lc-block mb-5">
					<div editable="rich">
						<p className="lead">Post your daily blog here, read other's post</p>
					</div>
				</div>
				<div className="lc-block">
					<Link  className='btn' to="/" >Read More</Link>
					<Link className='btn' to="/add">Add Post</Link>
				</div>
			</div>
		</div>

	</div>
   </div> 
 
  
    )
}

export default Banner


