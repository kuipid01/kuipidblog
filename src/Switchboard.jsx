import React, { useState } from 'react'
import img1 from "./Images/bg.jpg"
const Switchboard = () => {
    const [fend, setFend] = useState([
    
        
        {
            displayed:false,
        },
        [
           {
               title:"Next",
               imgUrl:img1
           }
        ]
    ]
    )

  const setDisplay =() => {
      fend[0].displayed=!fend[0].displayed;
      
  }
  return (

   
    <div>
        <div className="innerConatier">
            <div className="titles">
                <h3 onClick={setDisplay} >Frontend</h3>
                <h3>Ui/Ux</h3>
                <h3>Next Js</h3>
                <h3>Data Strutuce</h3>
            </div>

            
            <div className="innerdisplay">
                <div className="title"></div>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Switchboard