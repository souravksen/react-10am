import Card from "./Card"

const DefaultPropsConcept=()=>{
    const value=[
        {
            username:"sourav",
            age:22
        },
        {
            age:24
        },
        {
            username:"ram"
        }
    ]
    return(
        <div>
            {
                value.map((ele)=>{
                    return(
                        <Card user={ele}/>
                    )
                })
        }
            
        </div>
    )
}
export default DefaultPropsConcept