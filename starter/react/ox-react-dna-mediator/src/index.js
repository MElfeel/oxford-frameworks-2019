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

  render = () =>

    <section>
      <Name></Name>
      <Sequence></Sequence>
    </section>

}

// ===============================================================

const Name = () => <section>Adenine</section>

// ===============================================================

const Sequence = () =>

  <section>
    <span className="adenine">A</span>
  </section>

// ===============================================================

render(<DnaSequence />, document.getElementById('root'));

// ===============================================================
