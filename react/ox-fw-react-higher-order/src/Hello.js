import React from 'react';

let withData = url => ViewComponent => (

  class extends React.Component {

    constructor(props) {
      super(props)
      this.state = { data: [] }
    }

    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }

    render() {
      return <ViewComponent {...this.props} {...this.state} />
    }
  }
)

const Regions = ({ data: spain }) => (
  <ul className="flex">
    {spain.map((city,n) => (
      <li key={n}>{city.region}</li>
    ))}
  </ul>
)

const Directors = ({ data: films }) => (
  <ul className="flex">
    {films.map((f,n) => (
      <li key={n}>{f.director}</li>
    ))}
  </ul>
)

let SpainComponent = withData( "spain.json");
let SpanishRegions = SpainComponent(Regions);

let FilmDirectors = withData( "films.json")(Directors)

export {  SpanishRegions, FilmDirectors }

