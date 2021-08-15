import React, {useState,useEffect} from "react"
import CircleLoader from "react-spinners/ClipLoader";
import style from "./Loader.module.css"

const LoadingScreen = () => {

    let [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
    },[])

    return (
        <div className={style.loader}>
            {
                loading ?
                    <CircleLoader loading={loading} color={"red"} size={300} />
                    :null
            }
        </div>
    )
}
export default LoadingScreen;
