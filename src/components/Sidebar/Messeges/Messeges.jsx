import style from "./Messeges.module.css"
import React from "react";
import Messege from "./Messege/Messege"
import People from "./People/People"
import MessageFormContainer from "./Messege/MessageForm/MessageFormContainer";


const Messeges = ({DialogsPeople, DialogsPage, profile}) => {

    let Statement = DialogsPeople.map(people => (<People id={people.id} name={people.name} key={people.id}/>))
    
    let Statement1 = DialogsPage.map(message => (
        <Messege id={message.id} messege={message.messege} key={message.id} profile={profile}
            name={message.name} image={message.image}/>))

    return (
        <div className={style.container}>

            <div className={style.people}>
                {Statement}
            </div>

            <div className={style.main}>
                <div className={style.formInfo}>
                    <MessageFormContainer profile={profile}/>
                </div>

                <div className={style.form}>{Statement1}</div>
            </div>

        </div>
    )
}

export default Messeges;