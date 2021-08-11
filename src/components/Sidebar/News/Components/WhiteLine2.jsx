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
                <li><img src={Adventure}/><a href='#'><p>Travel the world </p></a>
                    <div className={style.adventure}>Adventure
                    <a href='#'><BsHeart/></a></div>
                </li>

                <li><img src={Food}/><a href='#'></a>
                    <div className={style.food}> <p>Foodcort Nirala</p> Food</div>
                    <a href='#'><BsHeart/></a>
                </li>

                <li><img src={Drama}/><a href='#'><p>Rolin Theitar</p></a>
                    <div className={style.drama}> Drama
                    <a href='#'><BsHeart/></a></div>
                </li>

                <li><img src={Fitnes}/><a href='#'><p>Active Mind</p></a>
                    <div className={style.fitnes}> Fitnes
                    <a href='#'><BsHeart/></a></div>
                </li>

            </ul>

        </div>
    )
}