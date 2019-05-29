import React from 'react';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stock: props.stock };
  }

  render() {
    return (
      <section className="shop">
        {this.state.stock.map((s, n) => <Panel key={n} label={s} />)}
      </section>
    )
  }
}

class Panel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { n: 0 };
    // this.up = this.up.bind(this)
    // this.down = this.down.bind(this)
  }

  // Arrow functions lexically bind value of THIS to surrounding context.
  
  up = () => {
    let up = this.state.n + 1;
    this.setState({ n: up })
  }

  down = () => {
    let down = Math.max(this.state.n - 1, 0);
    this.setState({ n: down })
  }

  render() {

    return (

      <section className="counter">

        <h4>{this.props.label}</h4>
        <h2 >{this.state.n}</h2>
        <p onClick={this.up}>UP</p>
        <p onClick={this.down}>DOWN</p>
        
      </section>
    )
  }
}

export default Shop;