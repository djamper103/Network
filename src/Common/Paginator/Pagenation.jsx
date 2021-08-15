import React from "react";
import Pagination from "@material-ui/lab/Pagination";


let BasicPagination=({totalUsersCount,pageSize,onPageChange})=>{

    let pagesCount=Math.ceil(totalUsersCount/pageSize)
    let pages=[]

    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }

    return (
        <div>
            <Pagination count={pagesCount} color="secondary" variant="outlined" shape="rounded" siblingCount={2}
                        onChange={(event, page) => { onPageChange(page); }}/>
        </div>
    );
}
export default  BasicPagination