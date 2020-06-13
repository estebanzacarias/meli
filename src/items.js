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
      <div >
      <Search handleSearch={this.handleSearch} />
          <div className="contenido">
          <div className="row justify-content-md-center">
        {items.map(hit =>


             <Link to={`/items/${hit.id}`} className="col-12 d-flex caja">

               <div className="col col-lg-4 ">
               <img src={hit.thumbnail}
               alt={hit.thumbnail}
               className="image-card"/>

               </div>
               <div className="col col-lg-6 contend-card producto">
               <h3>{hit.price}</h3>
               <h3>{hit.title}</h3>
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
