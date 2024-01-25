import "../././css/PropsComponent.css"
function PropsComponents(props,){
    // const StyleAttrs={
    //     backgroundColor:"brown",
    //     color:"white"
    // }
    return (
        // <div style={{backgroundColor:"brown",color:"black"}}>
        // <div style={StyleAttrs}>
        <div>
            hello,{props.name}<br></br>this is {props.course} class
        </div>
    )
}
export default PropsComponents;