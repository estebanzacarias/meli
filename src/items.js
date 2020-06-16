import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Search from './components/Search'


const API = 'https://api.mercadolibre.com/sites/MLA/search?q=:query';
class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],

    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ items: data.results }));
  }


  handleSearch=(search)=>{
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=:'+search)

      .then(res => res.json())

      .then(data => this.setState({ items: data.results }));

  }
  render() {
    const { items } = this.state;

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
