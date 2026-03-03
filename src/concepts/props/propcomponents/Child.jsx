const Child=(props)=>{
    console.log(props)
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <h1>{props.email}</h1>
            <hr />

        </div>
    )
}
export default Child