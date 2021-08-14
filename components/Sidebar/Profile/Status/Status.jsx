import React from "react";
import style from "./Status.module.css"

class Status extends React.Component{

    state={
        editMode:false,
        status:this.props.status
}


ActivateEditMode=()=> {
    this.setState({
        editMode:true
    })
}

    DeactivateEditMode=()=> {
        this.setState({
            editMode:false
        })
        this.props.UpdateThunk(this.state.status)
    }
    onStatusChange=(e)=>{
        this.setState({
            status:e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.status!==this.props.status){
            this.setState({
                    status: this.props.status
            }

            )
        }
    }

    render() {
        return(
            <div className={style.status}>
                {
                    !this.state.editMode &&
                    <div><span onClick={this.ActivateEditMode}>{this.props.status}</span></div>
                }
                {
                    this.state.editMode &&
                    <div ><input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.DeactivateEditMode}/></div>
                }

                <div></div>
            </div>

        )
    }


}
export  default  Status;