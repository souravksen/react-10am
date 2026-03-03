const TernaryRender=()=>{
    let value=false;
    let per=50
    let theme="dark"
    return (
        <div>
        <div>
            {value?<h1>Hello</h1>:<h1>Bye</h1>}
            {(per>70)?<p>A grade</p>:(per>50 && per<70)?<p>B grade</p>:<p>fail</p>}
            <h1 style={theme==="dark"?{backgroundColor:"red"}:{backgroundColor:"blue"}}>NAMASKARA</h1>
        </div>
        <div className={`box ${theme==="dark"?"dark":"light"}`}>

        </div>
        </div>
    )

}
export default TernaryRender