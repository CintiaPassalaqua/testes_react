import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled'
import '../../style.css';
import pista1 from './../../img/pista1.png';
import Canvas from './Canvas';

function App(props) {
  const [ procura, setProcura ] = useState('');
  const [ baixo, setBaixo ] = useState(false);
  const [ cima, setCima ] = useState(false);
  const [ esquerda, setEsquerda ] = useState(false);
  const [ direita, setDireita ] = useState(false);
  const [ acerto, setAcerto] = useState(false);
  const [ mensagem, setMensagem ] = useState([]);
  const [ pos, setPos] = useState(100);
  const [ posH, setPosH] = useState(50);
  const { id } = useParams()
  
  
				
  function handlePesquisa() { 
	if (procura==='a') {
			setMensagem(["Pista 1 "+id,"bhdbf sdhfdg fsdfsdgfh sdfhgsdyfgefg y efysg duyf gsduyfg suyd f"]);
			setAcerto(true)
			return;	
	}
	setMensagem("");
  }
  
  function paraCima() { 
	setPos(pos-10)
  } 
  function paraBaixo() { 
	setPos(pos+10)
  }
  function paraDireita() { 
	setPosH(posH+10)
  }
  function paraEsquerda() { 
	setPosH(posH-10)
  }
  
  function downHandler({ key }) {
    if (key === 'ArrowUp') {
	  if (!cima) paraCima();
      setCima(true);	  
    }
    if (key === 'ArrowDown') {
	  if (!baixo) paraBaixo();
      setBaixo(true);
    }
    if (key === 'ArrowRight') {
	  if (!direita) paraDireita();
      setDireita(true);
    }
    if (key === 'ArrowLeft') {
	  if (!esquerda) paraEsquerda();
      setEsquerda(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === 'ArrowUp') {
      setCima(false);
    }
    if (key === 'ArrowDown') {
      setBaixo(false);
    }
    if (key === 'ArrowRight') {
      setDireita(false);
    }
    if (key === 'ArrowLeft') {
      setEsquerda(false);
    }
  };
  				
  function displayInput() { 
	var draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		ctx.fillStyle = '#000000'
		ctx.beginPath()
		ctx.arc(posH, pos, 20*Math.sin(2)**2, 0, 2*Math.PI)
		ctx.fill()
	}
	if (!acerto) {
		return (<><S.Content><Canvas draw={draw} /></S.Content>		
		<S.Content>
		<S.Button type="button" onClick={paraEsquerda}>-</S.Button>
		<S.Button type="button" onClick={paraCima}>/\</S.Button>
		<S.Button type="button" onClick={paraBaixo}>\/</S.Button>
		<S.Button type="button" onClick={paraDireita}>-</S.Button>
		</S.Content>
		<S.Content><S.ImagemPrincipal src={pista1} /></S.Content><S.Content>
		<S.Input name="bla" id="bli" className="usuarioInput" placeholder="Resposta" value={procura} onKeyDown={handlePesquisa} onChange={e => setProcura(e.target.value.toLowerCase()) } />
	<S.Button type="button" onClick={handlePesquisa}>></S.Button></S.Content></>);
	}
  }

  useEffect(() => {},[]);


    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
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