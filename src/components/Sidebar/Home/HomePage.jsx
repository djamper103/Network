import React from "react";




const Home=()=>{
    const a=['2','1']
     let b=[...a,'awdaw',]
        console.log(b)

    const c={
        name:"awdawdaw",
        sername(street){
            return(`street${this.name}`+'  '+street)
        }

    }
    const u={
        name:"ttttt"
    }
    console.log(c.sername.bind(u,'eee')())
    let v=c.sername.bind(u,'eee')
    console.log(v())


    return(
        <div>
        </div>
    )
}

export default Home;