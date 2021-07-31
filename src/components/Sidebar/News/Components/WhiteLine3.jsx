import React from "react";
import style from "./WhiteLine3.module.css";
import Adventure from "../../../../assets/images/mesmerising-views-unforgettabl.jpg";
import {BsHeart} from "react-icons/all";
import Froots from "../../../../assets/images/froots.jpg";
import News from "../../../../assets/images/news.jpg";
import Sky from "../../../../assets/images/zvezdnoe_nebo_oblaka_zakat.jpg";



export  default  function WhiteLine3() {
    const ago1 = Math.floor(Math.random() * 10);
    const ago2 = Math.floor(Math.random() * 10);
    return(
        <div className={style.WhiteLine3}>
            <h3>Latest Top News </h3>

            <ul>

                <li><img src={Froots}/><a href='#'><p>Anyone can join</p></a>
                    <div className={style.Adventure}>{ago1} min ago</div>

                </li>

                <li><img src={News}/><a href='#'><p>Anyone can join</p></a>
                    <div className={style.Food}>{ago2} min ago</div>

                </li>

                <li><img src={Adventure}/><a href='#'><p>Anyone can join</p></a>
                    <div className={style.Drama}>{ago1} min ago</div>
                    </li>

                <li><img src={Sky}/><a href='#'><p>Anyone can join</p></a>
                    <div className={style.Fitnes}>{ago2} min ago</div>
                    </li>

            </ul>

        </div>
    )
}