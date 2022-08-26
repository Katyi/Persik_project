import React from 'react'
import Myimage from '../images/Pers1.jpg'

const Navbar = () => {
  return (
    <div className="headbox">
      <img
        className="picturesmall"
        src={Myimage}
        alt="Маленькое фото кота Персика"
      />
      <div className="headName">
        <h1>Кот Персик</h1>
      </div>
    </div>
  )
}

export default Navbar