import React, { useEffect, useState } from "react";
import axios from 'axios'



function App() {

  const [dados, setDados] = useState([])
  const [submercado, setSubmercado] = useState('')
  const [fonte, setFonte] = useState('')
  const [unidade, setUnidade] = useState('')
  const [agrupador, setAgrupador] = useState('')
  const [ano, setAno] = useState([])
  const [descricao, setDescricao] = useState('')
  


  /* */
  

  useEffect(()=> {
    axios
    .get("http://localhost:5500")
    .then((response)=>{
      console.log(response.data)
      setDados(response.data.produtos)
    });
  }, []);
  
  return (

    <div>
      <select name="dado" id="dado" onChange={e => setSubmercado(e.target.value) }>
        <option value="0">Selecione</option>
        {Array.from(new Set(dados.map((produtos)=> produtos.Submercado))).map((produtos)=> ( 
          <option>{produtos}</option>
        ))}
      </select>

      <select name="dado" id="dado" onChange={e => setFonte(e.target.value)}>
        <option value="0">Selecione</option>
        {Array.from(new Set(dados.filter(produtos => 
        produtos.Submercado === submercado ).map((produtos)=> produtos.Fonte))).map((produtos)=> ( 
          <option>{produtos}</option>
        ))}
      </select>

      <select name="dado" id="dado" onChange={e => setUnidade(e.target.value)}>
        <option value="0">Selecione</option>
        {Array.from(new Set(dados.filter(produtos =>
        produtos.Submercado === submercado 
        && produtos.Fonte === fonte)
        .map((produtos)=> produtos.UnidadeValor))).map((produtos)=> ( 
          <option>{produtos}</option>
        ))}
      </select>

      <select name="dado" id="dado" onChange={e => setAgrupador(e.target.value)}>
        <option value="0">Selecione</option>
        {Array.from(new Set(dados.filter(produtos => 
        produtos.Submercado === submercado 
        && produtos.Fonte === fonte 
        && produtos.UnidadeValor === unidade)
        .map((produtos)=> produtos.agrupador))).map((produtos)=> ( 
          <option>{produtos}</option>
        ))}
      </select>

      <select name="dado" id="dado" onChange={e => setAno(e.target.value)}>
        <option value="0">Selecione</option>
        {Array.from(new Set(dados.filter(produtos => 
        produtos.Submercado === submercado 
        && produtos.Fonte === fonte 
        && produtos.UnidadeValor === unidade 
        && produtos.agrupador === agrupador)
        .map((produtos)=> produtos.AnoProduto))).map((produtos)=> ( 
          <option>{produtos}</option>
        ))}
      </select>

      <select name="dado" id="dado" onChange={e => setDescricao(e.target.value)}>
        <option value="0">Selecione</option>
        {Array.from(new Set(dados.filter(produtos => 
        produtos.Submercado === submercado 
        && produtos.Fonte === fonte 
        && produtos.UnidadeValor === unidade 
        && produtos.agrupador === agrupador
        && produtos.AnoProduto == ano
        )
        
        .map((produtos)=> produtos.descricao))).map((produtos)=> ( 
          <option>{produtos}</option>
        ))}
      </select>
      
    </div>
  );
}

export default App;
