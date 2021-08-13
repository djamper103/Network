import React from 'react';
import style from "./News.module.css";
import userPhoto from "../../../assets/images/default-avatar-profile-icon-male.jpg";
import PostFormContainer from "../Profile/Myposts/Post/PostForm/PostFormContainer";
import WhiteLine1 from "./Components/WhiteLine1";
import WhiteLine3 from "./Components/WhiteLine3";
import WhiteLine2 from "./Components/WhiteLine2";
import WhiteLine4 from "./Components/WhiteLine4";
import WhiteLine5 from "./Components/WhiteLine5";
import WhiteLine6 from "./Components/WhiteLine6";
import AddNewNewsContainer from "./AddNewNewsContainer";


const News = ({profile}) => {


    return (
        <div className={style.container}>
            <div className={style.leftSide}>
                <WhiteLine1 profile={profile}/>
                <WhiteLine2/>
                <WhiteLine3/>
            </div>
            <div className={style.post}>
                <div className={style.newpost}>
                    <img src={profile.photos.small != null ? profile.photos.small : userPhoto}/>
                    <div className={style.postForm}><PostFormContainer/></div>
                </div>
                <div className={style.newsMain}>
                    <AddNewNewsContainer />
                </div>
            </div>
            <div className={style.rigthSide}>
                <WhiteLine4/>
                <WhiteLine5/>
                <WhiteLine6/>
            </div>

        </div>
    )
}
export default News;