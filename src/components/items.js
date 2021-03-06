import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import Search from './Search'

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      search:[],
      redirect: false,

    };
  }
  /* Hago la consulta a la Api sin parametros */
  componentDidMount() {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:query`)
      .then(response => response.json())
      .then(data => this.setState({ items: data.results }));
  }
  /* Cambio el estado de redirect a true cuando
  se escribe algo en la caja de busqueda para que vaya a buscar los resultados*/
  handleSearch=(search)=>{
    this.setState({search:search})
    this.setState({redirect:true})
  }

  render() {
      /* search contiene lo que se escribe en la caja, y es enviado
      como parametro en caso de que se redireccione*/
   const { items, search, redirect } = this.state;

   if (redirect) {
      return <Redirect to={`/item/search/${search}`} />
    }

    return (
    <div className="body">
      <Search handleSearch={this.handleSearch} />
      <div className="container contenedor padd">
          <div className="row justify-content-md-center pad ">
             {items.map(hit =>
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

export default Items;
