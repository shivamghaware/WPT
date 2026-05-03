import { Component } from "react"

class App extends Component{
  state={fname:"abc"}

  componentDidMount(){
    console.log("component mounted");
  }

  componentDidUpdate(){
    console.log("component Updated");
  }

  shouldComponentUpdate(){
    console.log("Should component update");
    return true;
  }

  changeName=()=>{
    this.setState({fname:"shivam"})
    console.log("set state called!")
  }

  render(){
    console.log("render")
    return(<>
      <center>
        <h1>hello {this.state.fname}</h1>
        <button onClick={this.changeName}>click</button>
      </center>
    </>);
  }
}
export default App
