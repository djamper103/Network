import React from "react";
import style from "./WhiteLine5.module.css";
import Advertizement from '../../../../assets/images/Advertizement.jpg'



export  default  function WhiteLine5() {

    return(
        <div className={style.container}>
            <h3>Advertizement</h3>
            <img src={Advertizement}/>
        </div>
    )
}