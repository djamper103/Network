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
                <li>
                    <div className={style.adventure}>
                        <img src={Adventure}/>
                        <span>
                            <a href="#">Travel the world</a>
                            <p>{ago1} Mutual</p>
                        </span>
                        <button href="#"><BsHeart/></button>
                    </div>
                </li>

                <li>
                    <div className={style.food}>
                        <img src={Food}/>
                        <span>
                            <a href="#">  Foodcort Nirala</a>
                            <p>{ago2} Mutual</p>
                        </span>
                        <button href="#"><BsHeart/></button>
                    </div>
                </li>

                <li>
                    <div className={style.drama}>
                        <img src={Drama}/>
                        <span>
                            <a href="#">Rolin Theitar</a>
                            <p>{ago2+ago1} Mutual</p>
                        </span>
                        <button href="#"><BsHeart/></button>
                    </div>
                </li>
                
                <li>
                    <div className={style.fitnes}>
                        <img src={Fitnes}/>
                        <span>
                            <a href="#">Active Mind</a>
                            <p>{ago1} Mutual</p>
                        </span>
                        <button href="#"><BsHeart/></button>
                    </div>
                </li>
            </ul>

        </div>
    )
}