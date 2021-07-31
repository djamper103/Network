import style from './Login.module.css'
import React from "react";
import {IconContext} from "react-icons";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineMail, BiMap,
    GrTwitter,
    HiOutlinePhone,
} from "react-icons/all";

const Login=(props)=>{
    return(

        <div >
            <IconContext.Provider value={{ size:"40px", }}>
            <ul>
                <li><a href="https://ru-ru.facebook.com/react/"><AiFillFacebook  /></a></li>
                <li><a href="https://twitter.com/reactjs"><GrTwitter  /></a></li>
                <li><a href="https://www.instagram.com/reactjsofficial/"><AiFillInstagram  /></a></li>
                <li><a href="https://www.youtube.com"><AiFillYoutube /></a></li>

            </ul>
                <ul>
                    <li><a href="https://ru-ru.facebook.com/react/"><BiMap  /></a></li>
                    <li><a href="https://twitter.com/reactjs"><HiOutlinePhone /></a></li>
                    <li><a href="https://www.instagram.com/reactjsofficial/"><AiOutlineMail /></a></li>


                </ul>

            </IconContext.Provider>


        </div>
    )
}

export default Login;