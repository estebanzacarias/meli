import React from 'react';
import Search from './components/Search'
import axios from 'axios';






class UserInfo extends React.Component {
  constructor(props) {
    super(props);



        this.state = {
          item: [],
          description: [],
          categoria:[],
        };



  }

  componentDidMount() {
  const { id } = this.props.match.params

    axios.get('https://api.mercadolibre.com/items/'+id)
      .then(({ data: item }) => {
        this.setState({ item });

      });
      axios.get('https://api.mercadolibre.com/items/'+id+'/description')
        .then(({ data: description }) => {
          this.setState({ description });

        });
      axios.get('https://api.mercadolibre.com/items/'+id)
          .then(({ data: cat}) => {

            const idCategories= cat.category_id;
            axios.get('https://api.mercadolibre.com/categories/'+idCategories)
                .then(({ data: categoria}) => {
                this.setState({categoria : categoria.path_from_root});


              });
        });











  }

  handleSearch=(search)=>{
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=:'+search)
      .then(res => res.json())
      .then(data => this.setState({ items: data.results }));

  }





  render() {

    const { item, description  } = this.state;



    return (

      <div className="color">
      <Search handleSearch={this.handleSearch} />
      <div className="container description-container">
        <div className="ruta d-flex">
          {this.state.categoria.map(categorias=>(
            <div key={categorias.id} className="ruteo" >
               <h4 className="e-categoria"> {categorias.name} &nbsp; > &nbsp;  </h4>

            </div>

          ))}

        </div>
      <div className="row col-12 d-flex ruta">


      <div className="col-8 image-d ">
      <img className="image-description" src={item.thumbnail}
      alt={item.thumbnail}/>
      </div>
      <div className="col-4 description">
        <div className="condiciones d-flex">
          <h6 translate="yes">{item.condition}&nbsp;-</h6><h6> &nbsp;{item.sold_quantity}vendidos</h6>
        </div>
        <h1>{item.title}</h1>
        <h3>$ {item.price} <p className="decimal">00</p></h3>
        <button type="button" className=" btn btn-primary btn-lg">Comprar</button>
      </div>
      <div className="col-10 description-p">
          <h3>Descripcion del producto</h3>
          <p>{description.plain_text}</p>
      </div>
      </div>
   </div>



      </div>

    );
  }
}

export default UserInfo;
