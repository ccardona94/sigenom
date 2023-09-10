import { FaBars } from "react-icons/fa6";
import { menuSubject } from "../Services/menu_subject.service.js";
import { useState } from "react";

export const Navbar = () => {

  const [date, setDate] = useState()

  const today = new Date()
  console.log(today)

  const handleClickOpenMenu = () => {
    menuSubject.setSubject(true)
  }

  return (
    <nav className='navbar'>
      <button onClick={handleClickOpenMenu} className="burger_btn"><FaBars/></button>
      <div className="user_info">
        <picture>
          <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="User_Avatar" />
        </picture>
        <span>username</span>
      </div>
      
    </nav>
  )
}
