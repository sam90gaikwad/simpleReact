import React from 'react'

const Body = () => {
  return (
    <>
      <div className='image' style={{margin: "10px"}}>
         <img src="https://www.onthebeach.co.uk/blog/wp-content/uploads/2014/04/iStock_000019214943Medium.jpg" alt='imag' width="100%" height="300px"/>
      </div>
      <div className='hero' style={{backgroundColor: "red", margin: "20px", color: "white", padding: '10px'}}>
        <div className='textContent' style={{textAlign: "center"}}>
        <h1>Think Health, Think Massage.</h1>
        <p>we are open 9am to 6pm. Monday through Sunday. If yuo would like to schedule an appointment with us 
            please call us at 898989898989 today
        </p>
        </div>
        <div className='buttons' style={{display: "flex", justifyContent: "center"}}>
            <button style={{marginRight: "10px", background: "none", border: " 1px solid white", color: "white" , padding:'10px 70px'}}>Learn More About Us</button>
            <button style={{marginLeft: "10px", background: "none", border: " 1px solid white", color: "white" , padding:'10px 70px'}}>Contact Us Today</button>
        </div>
      </div>
    </>
  )
}

export default Body
