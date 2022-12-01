import React from 'react'
import { Link } from 'react-router-dom';
import { excerpt } from './utils';

const Post = (props) => {

  const posts = props;
  const id = posts.id
  const title = posts.title;
  // const content = posts.desc;
  const imgUrl = posts.imgUrl
 
  return (
    <Link style={{textDecoration: 'none'}} to={`${id}`}>
    <div className='post__container'>
        <img src={imgUrl}  alt="post " />
        <div className="text">
        <h3 className="tittle">
           {title}
        </h3>
      {/* {excerpt(content,20)} */}
        </div>
       
   
    </div>
    </Link>
    
  )
}

export default Post