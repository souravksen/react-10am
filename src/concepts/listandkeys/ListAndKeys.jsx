import { Fragment } from "react"

const ListAndKeys=()=>{
    let arr=["a","ab","abc","abcd"]
    return(
        <div>
            {
                arr.map((ele,index)=>{
                    return(
                        <Fragment key={index}>
                            <h1>{ele}</h1>
                            <p>li</p>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
export default ListAndKeys  