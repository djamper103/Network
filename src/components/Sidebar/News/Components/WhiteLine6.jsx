import React from "react";
import style from "./WhiteLine6.module.css";
import Adventure from "../../../../assets/images/Adventure.jpg";
import {BsHeart} from "react-icons/all";
import Food from "../../../../assets/images/Food.jpg";
import Drama from "../../../../assets/images/Drama.jpg";
import Fitnes from "../../../../assets/images/Fitnes.jpg";



export  default  function WhiteLine6() {
    const ago1 = Math.floor(Math.random() * 10);
    const ago2 = Math.floor(Math.random() * 10);
    return(
        <div className={style.container}>
            <h3>Friends Zone</h3>
            <ul>
                <li><img src={Adventure}/> <div className={style.adventure}><a href='#'>Travel the world </a>
                <p>Mutual</p></div>
                    <button href='#'><BsHeart/></button>
                </li>

                <li><img src={Food}/> <div className={style.food}><a href='#'>
                    Foodcort Nirala</a> <p>Mutual</p></div>
                    <button href='#'><BsHeart/></button>
                </li>

                <li><img src={Drama}/><div className={style.drama}><a href='#'>Rolin Theitar</a>
                    <p>Mutual</p></div>
                    <button href='#'><BsHeart/></button>
                    
                </li>
                <li><img src={Fitnes}/><div className={style.fitnes}><a href='#'>Active Mind</a>
                    <p>{ago1} Mutual</p></div>
                    <button href='#'><BsHeart/></button>
                    
                </li>
            </ul>
        </div>
    )
}