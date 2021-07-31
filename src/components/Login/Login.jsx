import style from './Login.module.css'
import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Redirect, useHistory} from "react-router-dom";
import {AiFillFacebook, GrTwitter} from "react-icons/all";


const schema = yup.object().shape({
    // password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    // email: yup.string().email('Введите верный email').required('Обязательно'),
})

const Login = ({Loginingthunk,isAuth, captcha,}) => {

    const history = useHistory();

    function Registration() {
        history.push("/Registration");
    }


    const onSubmit = (data) => Loginingthunk(data.email, data.password, data.rememberMe,data.captcha)

    const {register, handleSubmit, errors,} = useForm(
        {
            resolver: yupResolver(schema),
        }
    );

    if (isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return (
<div className={style.container}>
<div className={style.mainContent}>
    <div className={style.aboutUs}>
        <h3>About Us</h3>
        <p> &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore etea dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className={style.login}>
        <h3>
            LOGIN
        </h3>
            <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.loginInput}>
                
                    <input name="email" ref={register} placeholder="email"/>
                    <p>{errors.email?.message}</p>

                    <input name="password" ref={register} placeholder="write password"/>
                    <p>{errors.password?.message}</p>
            
                    <div className={style.rememberMe}>
                        <input type={'checkbox'} name="rememberMe" ref={register}/>
                        <span>Remember me</span>
                    </div>
                </div>
                <div className={style.captcha}>
                { captcha ? <img src={ captcha}/>:'' }
                { captcha && <input name="captcha" ref={register} placeholder="write captcha"/>}
                </div>
                <div className={style.loginButton}>
                    <button type="submit">Login</button>
                    <button onClick={Registration}>Registration</button>
                </div>
            </form>
            </div>

        </div>
    
</div>
<div className={style.contactInfo}>
<div className={style.contactLinks}>
        <a href="https://github.com/djamper103"><span>Contacts</span></a>
        <a href="https://ru-ru.facebook.com/react/"><AiFillFacebook size="38px" /></a>
        <a href="https://twitter.com/reactjs"><GrTwitter size="38px" /></a>
    </div>
   
 <div className={style.userInfo}>
        Email: free@samuraijs.com,Password: free
    </div>
</div>
</div>
    )


}

export default Login;
