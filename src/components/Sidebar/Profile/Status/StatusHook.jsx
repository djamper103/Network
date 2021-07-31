import React, {useEffect, useState} from "react";
import style from "./Status.module.css"

const StatusHook = React.memo(props => {
        let [editMode, setEditMode] = useState(false)
        let [status, setStatus] = useState(props.status)


        useEffect(() => {
            setStatus(props.status)
        }, [props.status])

        let activateEditMode = () => {
            setEditMode(true)
        }
        let DeactivateEditMode = () => {
            setEditMode(false)
            props.UpdateThunk(status)
        }
        let onStatusChange = (e) => {
            setStatus(e.currentTarget.value)

        }


        return (
            <div className={style.Status}>
                {
                    !editMode &&
                    <div><span onDoubleClick={activateEditMode}>{props.status}</span></div>
                }
                {
                    editMode &&
                    <div><input onChange={onStatusChange} autoFocus={true}
                                onBlur={DeactivateEditMode}
                          value={status}
                    /></div>
                }

                <div></div>
            </div>

        )


    }
)
export default StatusHook;