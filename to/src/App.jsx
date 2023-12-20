import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inp: '',
      inputs: [],
    };
    this.change_inp = this.change_inp.bind(this);
  }

  change_inp = (e) => {
    this.setState(() => {
      return {
        inp: e.target.value,
        inputs: this.state.inputs,
      };
    });
  };

  create = () => {
    let oldvalue = this.state.inp;
    let oldinputs = this.state.inputs.slice();
    oldinputs.push(oldvalue);
    this.setState(() => {
      return {
        inp: '',
        inputs: oldinputs,
      };
    });
  };

  update = (e, ind) => {
    let oldinputsarray = [...this.state.inputs];
    oldinputsarray[ind] = e.target.value;
    this.setState(() => {
      return {
        inp: '',
        inputs: oldinputsarray,
      };
    });
  };

  deleteItem = (index) => {
    let oldInputs = this.state.inputs.slice();
    oldInputs.splice(index, 1);
    this.setState({
      inputs: oldInputs,
    });
  };

  render() {
    return (
      <>
        <div className='body'>
          <div className='box'>
            <input
              type='text'
              placeholder='Type Here'
              className='textbox'
              value={this.state.inp}
              onChange={this.change_inp}
            ></input>
            <button className='btn' onClick={this.create}>
              Add Item
            </button>
            <br />
            {this.state.inp}
            <br />
            {this.state.inputs &&
              this.state.inputs.map((item, ind) => {
                return (
                  <>
                    <input
                      type='text'
                      value={item}
                      onChange={(e) => {
                        this.update(e, ind);
                      }}
                    />
                    <button
                      className='delbtn'
                      onClick={() => this.deleteItem(ind)}
                    >
                      Delete Item
                    </button>
                    <br />
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
