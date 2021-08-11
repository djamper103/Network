import React from "react";
import style from "./WhiteLine2.module.css";
import Adventure from "../../../../assets/images/Adventure.jpg";
import {BsHeart} from "react-icons/all";
import Food from "../../../../assets/images/Food.jpg";
import Drama from "../../../../assets/images/Drama.jpg";
import Fitnes from "../../../../assets/images/Fitnes.jpg";


export  default  function WhiteLine2() {

    return(
        <div className={style.container}>
            <h3>Page You May Like</h3>
            <ul>
                <li><img src={Adventure}/> <div className={style.adventure}><a href='#'>Travel the world </a>
                <p>Adventure</p></div>
                    <button href='#'><BsHeart/></button>
                </li>

                <li><img src={Food}/> <div className={style.food}><a href='#'>
                    Foodcort Nirala</a> <p>Food</p></div>
                    <button href='#'><BsHeart/></button>
                </li>

                <li><img src={Drama}/><div className={style.drama}><a href='#'>Rolin Theitar</a>
                    <p>Drama</p></div>
                    <button href='#'><BsHeart/></button>
                    
                </li>
                <li><img src={Fitnes}/><div className={style.fitnes}><a href='#'>Active Mind</a>
                    <p>Fitnes</p></div>
                    <button href='#'><BsHeart/></button>
                    
                </li>


            </ul>

        </div>
    )
}