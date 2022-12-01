import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from './config';


const Details = () => {
    const {id} = useParams()
   const [post, setpost] = useState(null);
  useEffect(() => {
  id && getBlogDetails ();
  
  }, [id])
 const getBlogDetails = async () => {
     const docRef = doc(db, "posts", id);
     const bdetails = await getDoc(docRef);
     setpost(bdetails.data())
 }
 useEffect(() => {
 }, [])

  return (
    <div className='postcont'>
        <div className="inner">
          
          <div className="img">
              
              <img src={post?.imgUrl} alt="" /></div> 
              <h3>  {post?.title} </h3> 
          <p className="desc">
              {
                  post?.desc
              }
          </p>
        </div>
    </div>
  )
}

export default Details