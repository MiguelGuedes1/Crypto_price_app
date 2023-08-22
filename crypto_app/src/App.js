import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './coin';







function App() {
  const [moeda, setmoeda] = useState([]);
  const [procurar, setprocurar] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      )
      .then(res => {
        setmoeda(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setprocurar(e.target.value);
  };

  const filteredCoins = moeda.filter(coin =>
    coin.name.toLowerCase().includes(procurar.toLowerCase())
  );

  
  
  
  
  
  
  
  return (

    <div className='aplicacao_moeda'>
              <div className="backgroundImage"></div>

        
      <div className='procurar_moeda'>
        <h1 className='titulo_app'>Crypto Prices</h1>
        <form>
          <input
            className='input_moeda'
            type='text'
            onChange={handleChange}
            placeholder='Digite uma moeda do seu interesse'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            nome_da_moeda={coin.name}
            preco_da_moeda={coin.current_price}
            simbolo_da_moeda={coin.symbol}
            valor_de_mercado={coin.total_volume}
            volume_da_moeda_no_mercado={coin.market_cap}
            imagem_da_moeda={coin.image}
            varicao_preco_da_moeda_por_percentagem={coin.price_change_percentage_24h}
            preco_maximo_nas_ultimas_24h={coin.high_24h}
          />
        );
      })}
    </div>
  );
}

export default App;




