import React from 'react'
import './App.scss';
import Posts from './Posts';
const Home = () => {

  return (
    <>
     <div className="main__container">
       <h6>FEATURED ARTICLE</h6>
          <h1>Welcome To My Thoughts</h1>
      </div>
      <div>
        <Posts/>
      </div>
      </>
  )
}

export default Home