import React from 'react'
import './Header.css'
import Photo from "../assets/profpic.svg"

function Header() {
  return (
    <div className="Headall">
        <div className="picture">
            <img src={Photo} alt="profpic" />
        </div>
    </div>
  )
}

export default Header