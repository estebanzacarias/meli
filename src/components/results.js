import React from 'react';
import Search from './Search'
import { Link } from "react-router-dom";
import axios from 'axios';

class Query extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
      search:[],
      redirect: false,
      };
  }
  /* Agarro como parametro la Query y la paso en la consulta
  para poder filtrar las busquedas*/
  componentDidMount () {
    const { query } = this.props.match.params
     axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`)
       .then(({ data: item }) => {
         this.setState({ item: item.results });
    });
  }
    /*Utilizo la misma funcion de busqueda, nada mas que esta vez
    le doy la condicion de que si hay una busqueda nueva
    vuelva a ejecutar la consulta con los nuevos params*/
  handleSearch = ( search ) => {
    if ( search ) {
      axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${search}`)
       .then(({ data: item }) => {
         this.setState({ item: item.results });
      });

    } else {
       axios.get('https://api.mercadolibre.com/sites/MLA/search?q=:query')
        .then(({ data: item }) => {
          this.setState({ item: item.results });
      });
    }
  }

  render(){
  const {item} = this.state;

  return (

    <div className="body">

     <Search handleSearch={this.handleSearch} />

     <div className="container contenedor padd">

      <div className="row justify-content-md-center pad ">
       {item.map(hit =>

        <Link
        key={hit.id}
        to={`/items/${hit.id}`}
        className="col-12 d-flex productos">

        <div className="col-2 image">

          <img src={hit.thumbnail}
          alt={hit.thumbnail}
          className="image-card"/>

        </div>
        <div className="col-7 item">

          <h3 type="number">$ {hit.price}</h3>
          <h4>{hit.title}</h4>

        </div>
        <div className="col-3 site">

          <p>{hit.address.state_name}, {hit.address.city_name}</p>

        </div>
      </Link>



    )}
      </div>
    </div>
  </div>

  );
 }
}
export default Query;
