import React, {Component} from 'react';
import './App.css';



class Clicker extends Component {
    constructor(props){
        super(props)
        this.state={
            number: 0
        }
    }
    handleReset = () => {
        this.setState({number: 0})
    }
    handleAdd = () => {
        this.setState({number: this.state.number + 1})
    }
    handleSubtract = () => {
        if(this.state.number <=0){
           alert('you cannot go below!')
        } else {
            this.setState({number: this.state.number - 1})
        }
    }
    render(props){
  return (
    <div className="App">
        <h1 style={{ color: 'white',backgroundColor:'black' }}>Clicker</h1>
        <div className = "totalNumber">
            {this.state.number}
        </div>
       <div>
            <button className="a" onClick={this.handleAdd}>+</button>
            <button className="b" onClick={this.handleReset}>undo</button>
            <button className="c" onClick={this.handleSubtract}>-</button>
       </div>
    </div>
 );
}
}
export default Clicker;