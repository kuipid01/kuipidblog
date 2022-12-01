import React, { useContext, useState,useEffect } from 'react'
import { db } from './config';
import {addDoc,collection, serverTimestamp} from 'firebase/firestore'
import { AuthContext } from './AuthContext';
import {useNavigate } from 'react-router-dom';
import { getStorage, ref ,getDownloadURL,uploadBytesResumable, } from "firebase/storage";
import Posts from './Posts';
const storage = getStorage();


const Dashboard = () => {
    const{currentUser} = useContext(AuthContext);
    const user = currentUser;
    
    const [file, setfile] = useState(null)
    const [progress, setprogress] = useState(null)
    const [post, setPost] = useState(
        {
        title:"",
      desc :"",
     
        }
    )
    const navigate = useNavigate()
        useEffect(() => {
          const uploadFile = () => {
            const storageRef = ref(storage,`images/${file.name}`)
          const uploadTask = uploadBytesResumable(storageRef, file);

              uploadTask.on('state_changed', 
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setprogress(progress)
              switch (snapshot.state) {
                case 'paused':
                  break;
                case 'running':
                   break;
                  default:
                    break
              }
            }, 
            (error) => {
          
            }, 
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setPost((p) => ({...p, imgUrl:downloadURL}));
                
              });
             
            }
          );
          
          }
 
          file && uploadFile();
        }, [file])


        
        useEffect(() => {
        }, [post])
        
     const handleSubmit = async (e) =>{
      e.preventDefault()
      
        
        try {
          await addDoc(collection(db,"posts"),{
            ...post, 
            
            timeStamp:serverTimestamp(),
            author:user.uid
          })
          
        } catch (error) {
        }
      
      navigate("/")
     }
     
  return (
    <div className='dashboard'>
        <div className="posts">
            <Posts/>
        </div>
        <form className='myForm'>
            <h1>Create a new post</h1>
            <h3>Description :</h3>
            <input type="text" onChange={(e) => setPost({...post, title:e.target.value}) } placeholder='Enter Title of Post' />
            <textarea rows={20} name="textpost" onChange={(e) => setPost({...post, desc:e.target.value}) } placeholder='' id="text"  ></textarea>
            <p>{post.desc.length}/1000</p>
            <input onChange={(e) => 
            setfile(e.target.files[0]) } type="file" name="Add Image" id="image" />
        <button disabled={progress !==null && progress<100} onClick={handleSubmit} type="submit">Add Post</button>
        </form>
    </div>
  )
}
export default Dashboard