import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { fourBases } from "./data/data";

// ===============================================================

class DnaSequence extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      sequence: []
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.getBase, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  getBase = () => {

    let base = fourBases[Math.floor(Math.random() * fourBases.length)];

    this.setState({
      name: base.name,
      sequence: [...this.state.sequence, base]
    }, this.debug
    );

  }

  debug = () => console.log( this.state );

  render = () =>

    <section>
      <Name name={this.state.name}></Name>
      <Sequence sequence={this.state.sequence}></Sequence>
    </section>

}

// ===============================================================

const Name = ({ name }) => <section>{name}</section>

// ===============================================================

const Sequence = ({ sequence }) =>

  <section>
    {sequence.map((base, n) => <span className={base.name}>{base.code}</span>)}
  </section>

// ===============================================================

render(<DnaSequence />, document.getElementById('root'));

// ===============================================================
