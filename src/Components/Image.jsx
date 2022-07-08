import React from 'react'


const Image = ({img }) => {
  return (
    <div className="sliderimg">
    <img src={img} className="image" />
    </div>
  )
}

export default Image