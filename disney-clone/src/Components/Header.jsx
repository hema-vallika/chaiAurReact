import React from 'react'
import logo from './../assets/logo.png'
import { HiHome,HiStar,HiTv,HiPlayCircle, HiMagnifyingGlass } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";


function Header() {
  return (
    <div>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
    </div>
  )
}

export default Header