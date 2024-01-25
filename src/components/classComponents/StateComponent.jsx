import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state={
            name:"KEC",
            course:"MERN"
        }
    }

    changestate= () =>{
        //this.state.name ="kkec"
        console.log("kongu engineering college, perundurai")
    }
    

    render()
    {
        return(
            <div>
            <h1>This is state component</h1>
            <h2>hello,{this.state.name} and,{this.state.course}<br></br></h2>
            <h3>i am changing the state of the {this.state.name} to {this.changestate()}</h3>
            <button onMouseOver={this.changestate}>click me to change the state</button></div>
        )
    }
}
export default StateComponent;