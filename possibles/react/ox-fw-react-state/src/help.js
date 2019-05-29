
/*

  // At runtime the value of THIS may not be bound to the component. 
  // This explicit bind solves the problem.

  this.up = this.up.bind(this)
  this.down = this.down.bind(this)

  up() {
    let up = this.state.n + 1;
    this.setState({ n: up })
  }

  // ES6 : up = () => {}

  down() {
    let down = Math.max(this.state.n - 1, 0);
    this.setState({ n: down })
  }

  // ES6 : down = () => {}

*/