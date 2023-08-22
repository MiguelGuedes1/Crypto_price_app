import React from 'react';
import './coin.css';






const coin = ({
  nome_da_moeda,
  preco_da_moeda,
  simbolo_da_moeda,
  valor_de_mercado,
  volume_da_moeda_no_mercado,
  imagem_da_moeda,
  varicao_preco_da_moeda_por_percentagem,
  preco_maximo_nas_ultimas_24h
}) => {
  
  
  
  
  
  
  
  
  return (
    <div className='contentor_moeda'>
        
      <div className='apresentacao_moedas'>
        
        <div className='moeda'>
          <img src={imagem_da_moeda} alt='crypto' />
          <h1>{nome_da_moeda}</h1>
          
        </div>
        <div className='moeda-data'>
          <p className='moeda-price'><span>Preço actual</span> €{preco_da_moeda}</p>
          <p className='moeda-volume'><span>Volume de mercado</span> €{volume_da_moeda_no_mercado.toLocaleString()}</p>

      {varicao_preco_da_moeda_por_percentagem < 0 ? (
            <p className='percentagem_moeda vermelho'><span>Últimas 24h </span>{varicao_preco_da_moeda_por_percentagem.toFixed(2)}%</p>
          ) : (
            <p className='percentagem_moeda verde'><span>Últimas 24h </span>{varicao_preco_da_moeda_por_percentagem.toFixed(2)}%</p>
          )}

          <p className='valor_de_mercado'>
            <span>Valor de mercado</span> €{valor_de_mercado.toLocaleString()}
          </p>
          <p className='preco_maximo_nas_ultimas_24h'>
            <span>Preço máximo últimas 24h </span> €{preco_maximo_nas_ultimas_24h}
          </p>
        </div>
      </div>
    </div>
  );
};

export default coin;





