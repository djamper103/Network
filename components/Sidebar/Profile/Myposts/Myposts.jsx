import style from './Myposts.module.css'
import React from 'react';
import Post from "./Post/Post"
import PostFormContainer from "./Post/PostForm/PostFormContainer";
import userPhoto from "../../../../assets/images/default-avatar-profile-icon-male.jpg";


const Myposts = ({Profile,profile}) => {
    let Statement = Profile.map(dialog => (
        <Post name={dialog.Name} post={dialog.post} like={dialog.like} key={dialog.id}
              profile={profile} image={dialog.image}/>))

    return (
        <div className={style.posts}>
            <div className={style.newpost}>
                <img src={profile.photos.small != null ? profile.photos.small : userPhoto}/>
                <PostFormContainer/>
            </div>

            <div className={style.formInfo}>
                {Statement}
            </div>
        </div>
    );
}

export default Myposts;