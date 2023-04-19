import React from 'react'
import './NavHamburger.css'

export default function NavHamburger() {
   return (
    <div>
      <label className="burger" for="burger">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  )
}
