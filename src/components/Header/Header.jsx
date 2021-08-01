import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import React,{useState} from "react";
import {BsList,IoCloseOutline} from "react-icons/all";

const Header = ({Logoutthunk,isAuth}) => {
    const [activeMenu,setActiveMenu]=useState(false)

    return (

        <div className={style.Header}>
            <div className={style.logo}>
                <NavLink to={'/Profile'}> Logo</NavLink>
            </div>

            <div className={style.HeaderMain}>

                <NavLink to='/News'>News</NavLink>
                <NavLink to='/Messeges'>Messages</NavLink>
                <NavLink to='/Profile'>Profile</NavLink>

            </div>

            <div className={style.menu}>
                <button onClick={()=>setActiveMenu(!activeMenu)}>{activeMenu?<IoCloseOutline size = '35px'/>:<BsList size = '35px'/>}</button>
                <ul className={activeMenu?style.menu1:style.menu2} onClick={()=>setActiveMenu(false)} >
                    <li><NavLink to='/News'>News</NavLink></li>
                    <li><NavLink to='/Messeges'>Messages</NavLink></li>
                    <li><NavLink to='/Profile'>Profile</NavLink></li>
                </ul>
            </div>
            
            <div className={style.Login}>

                {isAuth ? <NavLink onClick={Logoutthunk} to={"/Home"}>Logout</NavLink>
                    : <NavLink to={'/Login'}>Login</NavLink>
                }

            </div>


        </div>
    )

}
export default Header;