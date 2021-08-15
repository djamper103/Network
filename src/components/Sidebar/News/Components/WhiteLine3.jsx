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
        <div className={style.container}>

            <h3>Latest Top News </h3>

            <ul>
                <li>
                    <div className={style.mainContent}>
                        <img src={Froots}/>
                        <span>
                            <a href="#">Anyone can join</a>
                            <p>{ago1} min ago</p>
                        </span>
                    </div>
                </li>

                <li>
                    <div className={style.mainContent}>
                        <img src={News}/>
                        <span>
                            <a href="#">Anyone can join</a>
                            <p>{ago2} min ago</p>
                        </span>
                    </div>
                </li>

                <li>
                    <div className={style.mainContent}>
                        <img src={Adventure}/>
                        <span>
                            <a href="#">Anyone can join</a>
                            <p>{ago1} min ago</p>
                        </span>
                    </div>
                </li>
                
                <li>
                    <div className={style.mainContent}>
                        <img src={Sky}/>
                        <span>
                            <a href="#">Anyone can join</a>
                            <p>{ago1} min ago</p>
                        </span>
                    </div>
                </li>
            </ul>

        </div>
    )
}