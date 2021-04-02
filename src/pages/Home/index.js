import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import '../../style.css';

function App(props) {
  const [ procura, setProcura ] = useState('');
  const [ mensagem, setMensagem ] = useState([]);
  const [ pokemonCards, setPokemonCards ] = useState([]);
  const [ carrinho, setCarrinho] = useState([]);
  const [ total, setTotal] = useState(0);
				
  function handlePesquisa() { 
	if (procura==='bla') {
			setMensagem("teste de mensagem");
			return;	
	}
	setMensagem("");
  }
  
    function addToCart(id) { 
	let cart = carrinho;
	cart.push(id)
	setCarrinho(cart);
	setTotal(total+pokemonCards[id].price);
  }


  useEffect(() => {
	const dTipos = {'bug':'inseto', 'dark':'noturno', 'dragon':'dragão', 'electric':'elétrico', 
				'fairy':'fada', 'fighting':'lutador', 'fire':'fogo',
				'grass':'grama', 'water':'água', 'normal':'normal',
				'poison':'venenoso', 'ground':'terra', 'psychic':'psíquico',
				'rock':'pedra', 'flying':'voador', 'ghost':'fantasma', 'steel':'metálico'};
    const iniciais = ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];

    const pokeList = [];
	    function fazPesquisa(pesquisa, poeNaLista = false) {
	axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`).then(resp => {
		const pokemon = resp.data;
		pokemon.name = resp.data.species.name;
		pokemon.sprite = resp.data.sprites.front_default;
		pokemon.abilities = resp.data.abilities.map(h => { return h.ability.name })
		pokemon.held_items = resp.data.held_items.map(i => { return i.item.name })
		pokemon.moves = resp.data.moves.map(m => { return m.move.name })
		pokemon.types = resp.data.types.map(t => { return t.type.name in dTipos ? dTipos[t.type.name] : t.type.name })
		pokemon.price = resp.data.stats.reduce((a,st) => { return a+st.base_stat**2 },0)/100;
		pokemon.show = true;
		delete pokemon.forms;
		delete pokemon.game_indices;
		delete pokemon.species;
		delete pokemon.sprites;
		pokeList.push(pokemon);
		if (pokeList.length<=40) { 
		let n = Math.floor((Math.random() * 500) + 1);
		while (iniciais.indexOf(n)!==-1) {
			n = Math.floor((Math.random() * 500) + 1);
		}
		iniciais.push(n);
		}
		if (pokeList.length<iniciais.length) { fazPesquisa(iniciais[pokeList.length], true); }
			
	})
	.catch(err => {		
	});
  }
		fazPesquisa(iniciais[0], true);
	},[]);

  
  


  return (
  <>
  <header>
   <div id="cd-cart-trigger"></div>
</header>
<main>
</main>
<div id="cd-shadow-layer"></div>

    <S.Container>

    <S.Content>
    <S.Input name="bla" id="bli" className="usuarioInput" placeholder="Senha" value={procura} onChange={e => setProcura(e.target.value.toLowerCase()) } />
	<S.Button type="button" onClick={handlePesquisa}>Confirma</S.Button>
    </S.Content>
	<S.Content>
	<p>
	{ mensagem }</p>
			</S.Content>
	</S.Container></>
  );
}

export default App;