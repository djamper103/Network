import style from './Messeges.module.css'
import React from 'react';
import Messege from './Messege/Messege'
import People from './People/People'
import MessageFormContainer from "./Messege/MessageForm/MessageFormContainer";
import userPhoto from "../../../assets/images/default-avatar-profile-icon-male.jpg";


const Messeges = ({DialogsPeople, DialogsPage, profile}) => {


    let Statement = DialogsPeople.map(people => (<People id={people.id} name={people.name} key={people.id}/>))
    let Statement1 = DialogsPage.map(message => (
        <Messege id={message.id} messege={message.messege} key={message.id} profile={profile}
                 name={message.name} image={message.image}/>))


    return (
        <div className={style.messeges}>

            <div className={style.people}>
                {Statement}
            </div>
            <div className={style.FormInfo}>
                <img src={profile.photos.small != null ? profile.photos.small : userPhoto}/>
                <MessageFormContainer/>
            </div>
            <div className={style.Form}>{Statement1}</div>
        </div>
    )
}

export default Messeges;