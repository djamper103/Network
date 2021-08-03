import React,{useState} from "react"
import style from "./Video.module.css"
import one from '../../../assets/video/55e41f0a-c030-41b7-b8a3-133b49486726.mp4'
import two from '../../../assets/video/c1c696a0-0891-41f1-aa66-86d605aec93b.mp4'
import tree from '../../../assets/video/cc45dc1e-d31c-4aeb-a84d-f644a655beb8.mp4'
import {BiLike, SiMinutemailer, TiMessages} from "react-icons/all";


const Video = ({}) => {
    const like = Math.floor(Math.random() * 10);
    const messages = Math.floor(Math.random() * 10);
    const minutemailer = Math.floor(Math.random() * 10);
    const [state]=useState(
        [  
            { 
                id: 1,
                url:one,
            },
            { 
                id: 2,
                url:two,
            },
            { 
                id: 3,
                url:tree,
            },
            { 
                id: 4,
                url:one,
            },
            { 
                id: 5,
                url:two,
            },
            { 
                id: 6,
                url:tree,
            }
    ]     
    )
    return (
        <div className={style.Container}>
            <div className={style.Header}>
                <h3>All Videos</h3>
                <div className={style.Search}>
                    <input placeholder="Search Media..."  />
                    <button>Search</button>
                </div>

            </div>
            <div className={style.mainContent}>
                {
                    state.map(item=>(
                        <div className={style.Video} key={item.id} >
                            <div className={style.videoMain}>
                                <video width="300" height="300" controls preload="auto">
                                    <source src={item.url} type="video/webm"/>
                                </video>
                            </div>
                            <div className={style.Post}>
                                <button><BiLike size="30px"/></button><span>{like} people like this</span>
                                <button><TiMessages size="30px"/></button><span> {messages}</span>
                                <button><SiMinutemailer size="30px"/></button><span>{minutemailer}</span> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Video;