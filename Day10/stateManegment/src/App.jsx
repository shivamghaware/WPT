import { Component } from "react"

class App extends Component{
  state={emp:{fname:"abc",addr:"xyz"}}

  changeAddr=()=>{
    this.setState({emp:{addr:"pune"}})
  }

  changeName=()=>{
    //debugger;
    var copyOfEmp={...this.state.emp}
    copyOfEmp.fname="shivam"
    this.setState({emp:copyOfEmp})
  }

  changeAddr=()=>{
    //debugger;
    var copyofEmp={...this.state.emp}
    copyofEmp.addr="pune"
    this.setState({emp:copyofEmp})
  }

  render(){
    console.log("render")
    return(<>
      <center>
        <h1>Name: {this.state.emp.fname}</h1>
        <button onClick={this.changeName}>click</button>

        <h1>Addr:{this.state.emp.addr}</h1>
        <button onClick={this.changeAddr}>click</button>
      </center>
    </>);
  }
}
export default App
