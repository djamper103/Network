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
                <li><img src={Adventure}/><a href='#'><p>Travel the world </p></a>
                    <div className={style.adventure}>
                        {ago2} Mutual
                        <a href='#'><BsHeart/></a>
                    </div>
                </li>
                <li><img src={Food}/><a href='#'><p>Foodcort Nirala</p></a>
                    <div className={style.food}>
                        {ago1} Mutual
                        <a href='#'><BsHeart/></a>
                    </div>
                </li>
                <li><img src={Drama}/><a href='#'><p>Rolin Theitar</p></a>
                    <div className={style.drama}>
                        {ago2} Mutual
                        <a href='#'><BsHeart/></a>
                    </div>
                </li>
                <li><img src={Fitnes}/><a href='#'><p>Active Mind</p></a>
                    <div className={style.fitnes}> {ago1} Mutual
                    <a href='#'><BsHeart/></a></div>
                </li>
            </ul>
        </div>
    )
}