import React, { useEffect, useState } from 'react'
import Post from './Post'
import { db } from './config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
const Posts = () => {
  

     const  [allposts, setallposts] = useState([])
     const  [loading, setloading] = useState(false)
   useEffect(() => {
    if(allposts.length===0){
      
      setloading(true)
      
    }
    else{
      setloading(false)
    }
    
   }, [])
   
   console.log(loading);
   
  const getPosts = async  () =>{
      const collectionRef = collection(db, 'posts');
      const q = query(collectionRef, orderBy('timeStamp', 'desc'))
    const unsub = onSnapshot(q, (snapshot) => {
         setallposts(snapshot.docs.map((doc)=>({
           id:doc.id, ...doc.data()
        })))
        return unsub;
    })

    }

    useEffect(() => {
      getPosts()
    
     
    }, [])
  
  return (
    <div className='postmain'>
      {loading &&  <div className="loading">
        <div>
          
        </div>
      </div>
      }
     
        {allposts.map(post => (
            <Post key={Math.random()} {...post}/>
        ))}
        
    </div>
  )
}

export default Posts