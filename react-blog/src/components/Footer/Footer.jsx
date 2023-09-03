import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
      <footer className="text-white w-100 text-center text-lg-start footer">
  <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2023 Copyright Deepak Blog
    <Link className="nav-link" to="https://mdbootstrap.com/">BlogPost.com</Link>
  </div>
</footer>
    )
}