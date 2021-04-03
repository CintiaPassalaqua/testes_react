import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import * as S from './styled'
import '../../style.css';
import pista1 from './../../img/pista1.png';

function App(props) {
  const [ procura, setProcura ] = useState('');
  const [ acerto, setAcerto] = useState(false);
  const [ mensagem, setMensagem ] = useState([]);
  const { id } = useParams()
				
  function handlePesquisa() { 
	if (procura==='a') {
			setMensagem(["Pista 1 "+id,"bhdbf sdhfdg fsdfsdgfh sdfhgsdyfgefg y efysg duyf gsduyfg suyd f"]);
			setAcerto(true)
			return;	
	}
	setMensagem("");
  }
  
  				
  function displayInput() { 
	if (!acerto) {
		return (<><S.Content>
		<S.ImagemPrincipal src={pista1} /></S.Content><S.Content>
		<S.Input name="bla" id="bli" className="usuarioInput" placeholder="Resposta" value={procura} onKeyDown={handlePesquisa} onChange={e => setProcura(e.target.value.toLowerCase()) } />
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
	<S.Content>	
	<p>{ mensagem[1] }</p>
	</S.Content>
	</S.Container></>
  );
}

export default App;