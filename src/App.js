import React, { Component } from "react";
import './index.css';
import { connect } from "react-redux";
import { sum, minus, divide, clear, coma, newNumber, multiply } from './calculations';

function mapStateToProps(state) {
    return {
        calculator : state.calculator
    };
};

const mapDispatchToProps=(dispatch)=> {
    return {
        divide:    (calc) => dispatch(divide(calc)),
        newNumber: (calc) => dispatch(newNumber(calc)),
        clear:     (calc) => dispatch(clear(calc)),
        sum:       (calc) => dispatch(sum(calc)),
        minus:     (calc) => dispatch(minus(calc)),
        multiply:  (calc) => dispatch(multiply(calc)),
        coma:      (calc) => dispatch(coma(calc)),
        dispatch
    }
}

class App extends Component {
    
    render() {
    return(
      <div className="calculator">
          <div className="calc_input">
                <input type="text" name="inputValue" readOnly value={this.props.calculator["values"]}/>
          </div>
          <div className="calc_result">
                <input type="text" name="inputResult" readOnly value={this.props.calculator["total"]}/>
          </div>
            <div className='row'>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(7)}>7</div>
              </div>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(8)}>8</div>
              </div>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(9)}>9</div>
              </div>
                <div className='column'>
                    <div onClick={()=>  this.props.clear("C")} >C</div>
              </div>
          </div>
            <div className='row'>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(4)}>4</div>
              </div>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(5)}>5</div>
              </div>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(6)}>6</div>
              </div>
                <div className='column'>
                    <div onClick={()=> this.props.divide("/")} >/</div>
              </div>
          </div>
            <div className='row'>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(1)}>1</div>
              </div>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(2)}>2</div>
              </div>
                <div className='column'>
                    <div onClick={() => this.props.newNumber(3)}>3</div>
              </div>
                <div className='column'>
                    <div onClick={()=> this.props.minus("-")}>-</div>
              </div>
          </div>
          <div className='row'>
              <div className='column'>
                    <div onClick={() => this.props.newNumber(0)}>0</div>
              </div>
              <div className='column'>
                    <div onClick={()=> this.props.coma(".")}>.</div>
              </div>
              <div className='column'>
                    <div onClick={() => this.props.multiply("*")}>*</div>
              </div>
              <div className='column'>
                    <div onClick={()=> this.props.sum("+")}>+</div>
              </div>
          </div>
          </div>
 );

}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
