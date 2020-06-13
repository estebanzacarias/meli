import React from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa';


class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {search:''}
  }
  handleChange = (e) =>{
    this.setState({search: e.target.value})
  }
  render(){
    const { handleSearch } =this.props
    const { search } = this.state
    return(
      <div className="search">


     <nav>


     <div className="nav">
        <div className="ico">
     <img href="/" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.1/mercadolibre/logo__large_plus.png"

     className="logo"/>
       </div>
     <div className="navegacion d-flex">
     <div className="ph">
         <input
         value={search}
         onChange={this.handleChange}
         type="text"
         className="input"
         placeholder="Buscar productos, marcas y mas..."
         />
    </div>
         <button

          className="boton"
          onClick={() => handleSearch(search)}><div className="borde"><FaSearch className="i"/></div></button>
 </div>
  </div>
     </nav>



      </div>
    )
  }
}

 Search.propTypes ={
   handleSearch:PropTypes.func.isRequired
 }


export default Search
