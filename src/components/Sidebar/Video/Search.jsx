import React, {useState} from "react";
import style from './Search.module.css'

const Search =({onSearch})=>{

    const[value,setState]=useState('')

    const valueChange=(event)=>{
        setState(event.target.value)
    }

    return(
        <div>
            <div className={style.Search}>
                <input value={value} onChange={valueChange}
                       placeholder="Search Media"
                      />
                <button onClick={()=>onSearch(value)}>Search</button>
            </div>
        </div>
    )

}

export default Search;