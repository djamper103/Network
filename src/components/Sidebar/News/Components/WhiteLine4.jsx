import React from "react";
import style from "./WhiteLine4.module.css";
import Froots from "../../../../assets/images/froots.jpg";
import News from "../../../../assets/images/Adventure.jpg";
import Adventure from "../../../../assets/images/mesmerising-views-unforgettabl.jpg";
import Adventure1 from "../../../../assets/images/background.jpg";
import Sky from "../../../../assets/images/zvezdnoe_nebo_oblaka_zakat.jpg";
import mountains from '../../../../assets/images/mountains.jpg'


export default function WhiteLine4() {
    const ago1 = Math.floor(Math.random() * 10);
    const ago2 = Math.floor(Math.random() * 10);
    return (
        <div className={style.container}>
            <h3>Recent Notifications </h3>
            <ul>
                <li>
                    <div className={style.mainContent}>
                        <img src={mountains}/>
                        <span>
                            <a href='#'>Anyone can join</a>
                            <p>{ago1} min ago</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div className={style.mainContent}>
                        <img src={News}/>
                        <span>
                            <a href='#'>Anyone can join</a>
                            <p>{ago2} min ago</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div className={style.mainContent}>
                        <img src={Adventure1}/>
                        <span>
                            <a href='#'>Anyone can join</a>
                            <p>{ago1} min ago</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div className={style.mainContent}>
                        <img src={Sky}/>
                        <span>
                            <a href='#'>Anyone can join</a>
                            <p>{ago1} min ago</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div className={style.mainContent}>
                        <img src={Adventure}/>
                        <span>
                            <a href='#'>Anyone can join</a>
                            <p>{ago1} min ago</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div className={style.mainContent}>
                        <img src={Sky}/>
                        <span>
                            <a href='#'>Anyone can join</a>
                            <p>{ago1} min ago</p>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}