import { NavLink } from "react-router-dom"
import style from './People.module.css'

const People =(props)=>{
    return(
        <div className={style.people}>
              <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"></img>
                <NavLink src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" to={'/People/'+props.id}> <span>{props.name} </span></NavLink>
        </div>
    )
}

export default People;