import React from 'react';

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



  render() {

    const { item, description } = this.state;


    return (
      <div>
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
