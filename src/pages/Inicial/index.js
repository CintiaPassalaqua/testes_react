import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled'
import '../../style.css';

function App(props) {
  const [ procura, setProcura ] = useState('');
  const [ acerto, setAcerto] = useState(false);
  const [ mensagem, setMensagem ] = useState([]);
  const { id } = useParams();
 

  
  
  function handlePesquisa() { 
	if (id==='inicial' && procura==='24') {
		setMensagem(["Pista 1 ","Seriam pares de sapos","ou pares de patos?","Onde é que deviam estar","os seus pares, de fato?"]);
		setAcerto(true)
		return;	
	}
	if (id==='japones' && procura==='pai') {
		setMensagem(["Pista 3 ","Social simulation video game series developed and published by Nintendo and created by Katsuya Eguchi and Hisashi Nogami.","The player character is a human who lives in a village inhabited by various anthropomorphic animals, carrying out various activities such as fishing, bug catching, and fossil hunting."]);
		setAcerto(true)
		return;	
	}
	if (id==='local' && procura==='columbia university') {
		setMensagem(["Pista 7 ","Qual será a receita escalafobética de hoje?"]);
		setAcerto(true)
		return;	
	}
	setMensagem("");
  }
  
 function displayMsgInicial() {
	if (id==='inicial') { 
	return ("Um pacote tem 48 balas: algumas de hortelã e as demais de laranja. Se a terça parte correspondente ao dobro do número de balas de hortelã excede a metade do de laranjas em 4 unidades, determine o número de balas laranja.");
	}
   if (id==='japones') {
	  return ('おとうさん');
  }
   if (id==='local') {
	  return ('40.8075° N, 73.9626° W');
  }
  }
  
  				
  function displayInput() {
	if (!acerto) {
		return (<>
		<S.Content>		
		</S.Content>
		<S.Content><p >{displayMsgInicial()}</p>
</S.Content><S.Content>
		<S.Input name="resposta" id="resposta" placeholder="Resposta" value={procura} onKeyDown={handlePesquisa} onChange={e => setProcura(e.target.value.toLowerCase()) } />
	<S.Button type="button" onClick={handlePesquisa}>></S.Button></S.Content></>);
	}
  }
  

  useEffect(() => {},[]);

  return (
  <>
  <header>
   <div id="cd-cart-trigger"></div>
</header>
<main>
</main>
<div id="cd-shadow-layer"></div>

    <S.Container>    
	{ displayInput() }
	<S.Content>	
	<h1>{ mensagem[0] }</h1>
	</S.Content>
	<S.P>{ mensagem[1] }</S.P>
	<S.P>{ mensagem[2] }</S.P>
	<S.P>{ mensagem[3] }</S.P>
	<S.P>{ mensagem[4] }</S.P>
	</S.Container></>
  );
}

export default App;