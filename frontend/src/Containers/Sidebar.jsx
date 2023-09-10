import { FaPowerOff, FaAngleLeft } from "react-icons/fa6";
import { menuContract, menuSubject } from "../Services/menu_subject.service";
import {useEffect, useState } from "react";

export const Sidebar = () => {
  const [isShow, setIsShow] = useState()

  const handleCloseMenu = () => {
    setIsShow(false)
    menuSubject.setSubject(false)
  }

  useEffect(() => {
    menuSubject.getSubject().subscribe((value)=> {
      setIsShow(value)
      console.log(value)
    })
  },[])

  return (
    <aside className={`${isShow && 'show' } sidebar`}>
      <div className="sidebar_content">
        <button onClick={handleCloseMenu} className="close_btn">
          <FaAngleLeft/>
        </button>
        <div className="user_info">
          <picture>
            <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="User_Avatar" />
          </picture>
          <h5>Username</h5>
          <span>username@gmail.com</span>
          
        </div>
        <ul className="menu_content">
          <li className="menu_item">
            <a href=""></a>
          </li>
          <li className="menu_item">
            <a href=""></a>
          </li>
          <li className="menu_item">
            <a href=""></a>
          </li>
          <li className="menu_item">
            <a className="menu_link" href=""><i><FaPowerOff/></i><span>Salir</span></a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

