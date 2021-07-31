import React from "react"
import style from "./Video.module.css"
import Search from "./Search";
import one from '../../../assets/video/55e41f0a-c030-41b7-b8a3-133b49486726.mp4'
import two from '../../../assets/video/c1c696a0-0891-41f1-aa66-86d605aec93b.mp4'
import tree from '../../../assets/video/cc45dc1e-d31c-4aeb-a84d-f644a655beb8.mp4'
import {BiLike, SiMinutemailer, TiMessages} from "react-icons/all";


const Video = ({SearchSuccess, Profile}) => {
    const like = Math.floor(Math.random() * 10);
    const messages = Math.floor(Math.random() * 10);
    const minutemailer = Math.floor(Math.random() * 10);

    debugger
    return (
        <div>
            <div className={style.Video}>
                <h3>All Videos</h3>
                <Search onSearch={SearchSuccess}/>

            </div>
            <div className={style.parent}>

                <div className={style.child}>
                    <video
                        width="244"
                        height="244"
                        controls
                        preload="auto"
                    >
                        <source src={one} type="video/webm"/>

                    </video>
                    <div className={style.Post}>
                        <div className={style.Like}><a src='#'><BiLike/></a> {messages} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {like}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {minutemailer}</a></div>
                    </div>
                </div>

                <div className={style.child1}>
                    <video
                           width="244"
                           height="244"
                           controls
                           preload="auto"
                    >
                        <source src={two} type="video/webm"/>
                    </video>
                    <div className={style.Post}>
                        <div className={style.Like}><a src='#'><BiLike/></a> {like} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {messages}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {like}</a></div>
                    </div>
                </div>

                <div className={style.child2}>
                    <video
                        width="244"
                        height="244"
                        controls
                        preload="auto"
                    >
                        <source src={tree} type="video/webm"/>
                    </video>
                    <div className={style.Post}>

                        <div className={style.Like}><a src='#'><BiLike/></a> {like} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {messages}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {minutemailer}</a></div>
                    </div>
                </div>

                <div className={style.child3}>
                    <video
                        width="244"
                        height="244"
                        controls
                        preload="auto"
                    >
                        <source src={one} type="video/webm"/>
                    </video>
                    <div className={style.Post}>
                        <div className={style.Like}><a src='#'><BiLike/></a> {like} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {messages}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {minutemailer}</a></div>
                    </div>
                </div>

                <div className={style.child4}>
                    <video
                        width="244"
                        height="244"
                        controls
                        preload="auto"
                    >
                        <source src={two} type="video/webm"/>
                    </video>
                    <div className={style.Post}>
                        <div className={style.Like}><a src='#'><BiLike/></a> {messages} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {like}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {minutemailer}</a></div>
                    </div>
                </div>

                <div className={style.child5}>
                    <video
                        width="244"
                        height="244"
                        controls
                        preload="auto"
                    >
                        <source src={tree} type="video/webm"/>
                    </video>
                    <div className={style.Post}>
                        <div className={style.Like}><a src='#'><BiLike/></a> {messages} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {minutemailer}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {like}</a></div>
                    </div>
                </div>

                <div className={style.child6}>
                    <video
                        width="244"
                        height="244"
                        controls
                        preload="auto"
                    >
                        <source src={one} type="video/webm"/>
                    </video>
                    <div className={style.Post}>
                        <div className={style.Like}><a src='#'><BiLike/></a> {messages} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {like}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {minutemailer}</a></div>
                    </div>
                </div>

                <div className={style.child7}>
                    <video
                        width="244"
                        height="244"
                        controls
                        preload="auto"
                    >
                        <source src={two} type="video/webm"/>
                    </video>
                    <div className={style.Post}>
                        <div className={style.Like}><a src='#'><BiLike/></a> {messages} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {minutemailer}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {like}</a></div>
                    </div>
                </div>

                <div className={style.child8}>
                    <video
                        width="244"
                        height="244"
                        controls
                        preload="auto"
                    >
                        <source src={tree} type="video/webm"/>
                    </video>
                    <div className={style.Post}>
                        <div className={style.Like}><a src='#'><BiLike/></a> {minutemailer} people like this</div>
                        <div className={style.Messages}><a src='#'><TiMessages/> {like}</a></div>
                        <div className={style.Minutemailer}><a src='#'><SiMinutemailer/> {messages}</a></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Video;