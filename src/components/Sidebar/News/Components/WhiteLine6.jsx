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
        <div className={style.WhiteLine6}>
            <h3>Friends Zone</h3>

            <ul>

                <li><img src={Adventure}/><a href='#'><p>Travel the world </p></a>
                    <div className={style.Adventure}>{ago2} Mutual</div>
                    <div className={style.BsHeart1}><a href='#'><BsHeart/></a></div>
                </li>

                <li><img src={Food}/><a href='#'><p>Foodcort Nirala</p></a>
                    <div className={style.Food}> {ago1} Mutual</div>
                    <div className={style.BsHeart2}><a href='#'><BsHeart/></a></div>
                </li>

                <li><img src={Drama}/><a href='#'><p>Rolin Theitar</p></a>
                    <div className={style.Drama}> {ago2} Mutual</div>
                    <div className={style.BsHeart3}><a href='#'><BsHeart/></a></div></li>

                <li><img src={Fitnes}/><a href='#'><p>Active Mind</p></a>
                    <div className={style.Fitnes}> {ago1} Mutual</div>
                    <div className={style.BsHeart4}><a href='#'><BsHeart/></a></div></li>

            </ul>


        </div>
    )
}