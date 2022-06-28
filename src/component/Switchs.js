import React from 'react'

export default function Switchs(props) {

    const changeColortoRed = ()=>
  {
    
    if(props.myStyle.backgroundColor !== "red")
    {
      props.setMystyle({
        color:"white",
        backgroundColor:"red"
  
      })
    }
    else{
     props.setMystyle({
        color:"black",
        backgroundColor:"white"
  
      })
    }
  }
  const changeColortoblue = ()=>
  {
    
    if(props.myStyle.backgroundColor !== "blue")
    {
       props.setMystyle({
        color:"white",
        backgroundColor:"blue"
  
      })
    }
    else{
       props.setMystyle({
        color:"black",
        backgroundColor:"white"
  
      })
    }
  }
  return (
    <div className='d-flex'>
       <div className="form-check form-switch mx-1">
  <input className="form-check-input" type="checkbox" id="switch"  onClick={changeColortoRed}  />
  <label className="form-check-label" htmlFor="switch">red</label>
  </div>
  <div className="form-check form-switch mx-1">
  <input className="form-check-input" type="checkbox" id="switch" onClick={changeColortoblue} />
  <label className="form-check-label" htmlFor="switch">blue</label>
  </div>
  </div>
   
  )
}
