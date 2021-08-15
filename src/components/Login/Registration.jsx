import style from "./Registaration.module.css"
import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useHistory} from "react-router-dom";


const schema = yup.object().shape({
    login: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    name: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    secondName: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    age: yup.number().typeError("Должно быть числом").required("Обязательно"),
    password: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Пароли не совпадают").required("Обязательно"),
    email: yup.string().email("Введите верный email").required("Обязательно"),
    confirmEmail: yup.string().email("Введите верный email").oneOf([yup.ref("email")], "Emails не совпадают").required("Обязательно")
})

const Registration = ({AddLoginInfoActionCreator,}) => {

    const history = useHistory();

    function Registration() {
        history.push("/Login");
    }

    const onSubmit = (data) => AddLoginInfoActionCreator(data)

    const {register, handleSubmit, errors,} = useForm(
        {
            resolver: yupResolver(schema),
        }
    );

    return (
        <div className={style.Form}>

            <form onSubmit={handleSubmit(onSubmit)}>
            
                <input name="login" ref={register} placeholder="write login"/>
                <p>{errors.login?.message}</p>

                <input name="name" ref={register} placeholder="write name"/>
                <p>{errors.name?.message}</p>

                <input name="secondName" ref={register} placeholder="write secondName"/>
                <p>{errors.secondName?.message}</p>

                <input name="age" ref={register} placeholder="write age"/>
                <p>{errors.age?.message}</p>

                <input name="password" ref={register} placeholder="write password"/>
                <p>{errors.password?.message}</p>

                <input name="confirmPassword" ref={register} placeholder="confirm Password"/>
                <p>{errors.confirmPassword?.message}</p>

                <input name="email" ref={register} placeholder="email"/>
                <p>{errors.email?.message}</p>

                <input name="confirmEmail" ref={register} placeholder="confirm Email"/>
                <p>{errors.naconfirmEmailme?.message}</p>

                <button type="submit" onClick={Registration}>Registration</button>

            </form>

        </div>
    )
}

export default Registration;
