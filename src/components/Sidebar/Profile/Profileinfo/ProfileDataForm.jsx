
import React from "react";
import style from "./ProfileDataForm.module.css"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    // fullName: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    // github: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    // vk: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    // facebook: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    // instagram: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    // twitter: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    // website: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    // youtube: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    // mainLink: yup.string().typeError("Должно быть строкой").required("Обязательно"),
})

const ProfileDataForm = ({onSubmitData,profile}) => {

    const onSubmit = (data) =>onSubmitData(data)

    const {register, handleSubmit, errors,} = useForm(
            {
                resolver: yupResolver(schema),
            }
        );

    return (
        <div className={style.form}>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={style.formMain}>
                    <input name={"userId"} ref={register} placeholder="write your id"/>
                    <span> User Id {errors.userId?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="lookingForAJobDescription" ref={register} placeholder="job description"/> 
                    <span>job description{errors.lookingForAJobDescription?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="fullName" ref={register} placeholder="write your full name"/>
                    <span> Full Name{errors.fullName?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name={"contacts.github"} ref={register} placeholder="github"/>
                    <span>Github {errors.github?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="contacts.vk" ref={register} placeholder="vk.com"/>
                    <span>Vkontakte {errors.vk?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="contacts.facebook" ref={register} placeholder="facebook"/>
                    <span>Facebook {errors.facebook?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="contacts.instagram" ref={register} placeholder="instagram"/>
                    <span>Instagram {errors.instagram?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="contacts.twitter" ref={register} placeholder="twitter"/>
                    <span>Twitter {errors.twitter?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="contacts.website" ref={register} placeholder="website"/>
                    <span>Website {errors.website?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="contacts.youtube" ref={register} placeholder="youtube"/>
                    <span>Youtube {errors.youtube?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name="contacts.mainLink" ref={register} placeholder="mainLink"/>
                    <span>Main link {errors.mainLink?.message}</span>
                </div>

                <div className={style.formMain}>
                    <input name={"lookingForAJob"} ref={register} type="checkbox"/>
                    <p> Looking for a job? {errors.lookingForAJob?.message}</p>
                </div>

                <button type="submit">Save</button>
                
                </form>

            </div>
    )
}













// const onSubmit = (data) =>  console.log(data)
    //
    //
    // const {register, handleSubmit, errors,} = useForm(
    //     {
    //         resolver: yupResolver(schema),
    //     }
    // );
    //
    // return (
    //
    //
    //     <div >
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //             <input name="fullName" ref={register} placeholder="write your full name"/>
    //             <p>{errors.fullName?.message}</p>
    //
    //             <input name="status" ref={register} placeholder="status"/>
    //             <p>{errors.status?.message}</p>
    //
    //             <input name="aboutMe" ref={register} placeholder="about me"/>
    //             <p>{errors.aboutMe?.message}</p>
    //
    //             <input name="contacts.github" ref={register} placeholder="github"/>
    //             <p>{errors.github?.message}</p>
    //
    //             <input name="vk" ref={register} placeholder="vk.com"/>
    //             <p>{errors.vk?.message}</p>
    //
    //             <input name="facebook" ref={register} placeholder="facebook"/>
    //             <p>{errors.facebook?.message}</p>
    //
    //             <input name="instagram" ref={register} placeholder="instagram"/>
    //             <p>{errors.instagram?.message}</p>
    //
    //             <input name="twitter" ref={register} placeholder="twitter"/>
    //             <p>{errors.twitter?.message}</p>
    //
    //             <input name="website" ref={register} placeholder="website"/>
    //             <p>{errors.website?.message}</p>
    //
    //             <input name="youtube" ref={register} placeholder="youtube"/>
    //             <p>{errors.youtube?.message}</p>
    //
    //             <input name="mainLink" ref={register} placeholder="mainLink"/>
    //             <p>{errors.mainLink?.message}</p>
    //
    //
    //             <div>looking for a job?</div>
    //             <input type="checkbox" name="lookingForAJob" ref={register} /><br/><br/>
    //
    //             <button type="submit">Save</button>
    //             {/*onClick={Save}*/}
    //
    //
    //
    //         </form>
    //     </div>
    //
    // )




export default ProfileDataForm;
