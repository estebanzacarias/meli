import React from 'react';
import Search from './components/Search'
import axios from 'axios';






class UserInfo extends React.Component {
  constructor(props) {
    super(props);



        this.state = {
          item: [],
          description: [],
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

  }
  handleSearch=(search)=>{
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=:'+search)
      .then(res => res.json())
      .then(data => this.setState({ items: data.results }));

  }



  render() {

    const { item, description } = this.state;


    return (

      <div>
      <Search handleSearch={this.handleSearch} />
      <h1>{item.title}</h1>
      <h3>${item.price}</h3>
      <img src={item.thumbnail}
      alt={item.thumbnail}/>
      <p>{description.plain_text}</p>

      </div>

    );
  }
}

export default UserInfo;
