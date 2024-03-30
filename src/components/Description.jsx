import React from 'react'

const Description = (props) => {
  return (
    <>
     <p className="leading-relaxed mb-4">
          {props.hack_object.event_desc}
        </p>
        
    </>
  )
}

export default Description