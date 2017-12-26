import React from 'react';


const ListCoin = props => (
  <div align="center" >
    <h3>Total Coins: {props.coins.length} </h3>
    <p>Some Coins  </p>
    {props.coins.map(coin => 
        <div key={coin} >
           <li >{coin} </li> <button onClick={(e) => {props.removeCoinHandle(coin)} }>Remove </button>
       </div>    
    )
    }
  </div>)

ListCoin.defaultProps = {
  coins: []
}

export default ListCoin;

