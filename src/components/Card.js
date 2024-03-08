import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='card' style={{ marginLeft: "10px", width: '280px', height: "300px", border: "1px solid gray"}}>
                <div className='color' style={{ width: "280px", height: "225px", backgroundColor: `${props.code}` }} >
    
                </div>
                <div className='text' style={{backgroundColor: "white", width: "280px", height: "75px" }}>
                    <h5 style={{margin: "0px 0px 10px 10px"}}>{props.code}</h5>
                    <p style={{color: `${props.color}`}}>{props.color}</p>
                </div>
            </div>
        </>
    )
}

export default Card
