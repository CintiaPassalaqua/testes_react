import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled'
import '../../style.css';
import pista1 from './../../img/pista1.png';
import Canvas from './Canvas';

function App(props) {
  const [ procura, setProcura ] = useState('');
  const [ yi, setYi ] = useState(300);
  const [ xi, setXi ] = useState(0);
  const [ s, setS ] = useState(3/2);
  //const [ baixo, setBaixo ] = useState(false);
  //const [ cima, setCima ] = useState(false);
  //const [ esquerda, setEsquerda ] = useState(false);
  //const [ direita, setDireita ] = useState(false);
  const [ acerto, setAcerto] = useState(false);
  const [ mensagem, setMensagem ] = useState([]);
  const [ pos, setPos] = useState(130*s);
  const [ posH, setPosH] = useState(70*s);
  const { id } = useParams()
  
  
  function handlePesquisa() { 
	if (procura==='a') {
		setMensagem(["Pista 1 "+id,"bhdbf sdhfdg fsdfsdgfh sdfhgsdyfgefg y efysg duyf gsduyfg suyd f"]);
		setAcerto(true)
		setS(3/2);
		return;	
	}
	setMensagem("");
  }
  
  function paraCima() { 
	setPos(pos-0*s);
	setYi(yi+20*s);
  } 
  function paraBaixo() { 
	setPos(pos+0*s);
	setYi(yi-20*s);
  }
  function paraDireita() { 
	setPosH(posH+0*s);
	setXi(xi-20*s);
  }
  function paraEsquerda() { 
	setPosH(posH-0*s);
	setXi(xi+20*s);
  }
  
 
  				
  function displayInput() { 
	var draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.moveTo(20*s, 0);
ctx.lineTo(20*s, 300*s);
ctx.moveTo(40*s, 0);
ctx.lineTo(40*s, 300*s);
ctx.moveTo(60*s, 0);
ctx.lineTo(60*s, 300*s);
ctx.moveTo(80*s, 0);
ctx.lineTo(80*s, 300*s);
ctx.moveTo(100*s, 0);
ctx.lineTo(100*s, 300*s);
ctx.moveTo(120*s, 0);
ctx.lineTo(120*s, 300*s);
ctx.moveTo(140*s, 0);
ctx.lineTo(140*s, 300*s);
ctx.moveTo(0, 20*s);
ctx.lineTo(300*s, 20*s);
ctx.moveTo(0, 40*s);
ctx.lineTo(300*s, 40*s);
ctx.moveTo(0, 60*s);
ctx.lineTo(300*s, 60*s);
ctx.moveTo(0, 80*s);
ctx.lineTo(300*s, 80*s);
ctx.moveTo(0, 100*s);
ctx.lineTo(300*s, 100*s);
ctx.moveTo(0, 120*s);
ctx.lineTo(300*s, 120*s);
ctx.moveTo(0, 140*s);
ctx.lineTo(300*s, 140*s);
ctx.moveTo(0, 160*s);
ctx.lineTo(300*s, 160*s);
ctx.moveTo(0, 180*s);
ctx.lineTo(300*s, 180*s);
ctx.moveTo(0, 200*s);
ctx.lineTo(300*s, 200*s);
ctx.moveTo(0, 220*s);
ctx.lineTo(300*s, 220*s);
ctx.moveTo(0, 240*s);
ctx.lineTo(300*s, 240*s);
ctx.moveTo(0, 260*s);
ctx.lineTo(300*s, 260*s);
ctx.stroke(); // Draw it
		
		
		
		ctx.fillStyle = '#000000'
		ctx.beginPath()
		ctx.arc(posH, pos, 10, 0, 2*Math.PI)
		ctx.fill()
		
		
		
		
		ctx.beginPath();
ctx.strokeStyle = "green"; // Green path
ctx.lineWidth = 5*s;
ctx.moveTo(xi, yi);
ctx.lineTo(xi, yi-140*s);
ctx.lineTo(xi+160*s, yi-140*s);
ctx.moveTo(xi+200*s, yi-140*s);
ctx.lineTo(xi+200*s, yi-100*s);
ctx.lineTo(xi+150*s, yi-100*s);
ctx.lineTo(xi+140*s, yi-80*s);
ctx.lineTo(xi+140*s, yi);
ctx.lineTo(xi, yi);
ctx.stroke(); // Draw it


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5*s;
ctx.moveTo(xi+160*s, yi-140*s);
ctx.lineTo(xi+160*s, yi-180*s);
ctx.lineTo(xi+240*s, yi-180*s);
ctx.moveTo(xi+290*s, yi-180*s);
ctx.lineTo(xi+340*s, yi-180*s);
ctx.lineTo(xi+340*s, yi-175*s);
ctx.moveTo(xi+340*s, yi-140*s);
ctx.lineTo(xi+340*s, yi-130*s);
ctx.moveTo(xi+350*s, yi-100*s);
ctx.lineTo(xi+330*s, yi-100*s);
ctx.moveTo(xi+290*s, yi-100*s);
ctx.lineTo(xi+200*s, yi-100*s);
ctx.stroke(); // Draw it


	}
	if (!acerto) {
		return (<><S.Content><Canvas draw={draw} /></S.Content>		
		<S.Content>
		
		<S.ButtonArrow type="button" onClick={paraEsquerda}>-</S.ButtonArrow>
		<S.ButtonArrow type="button" onClick={paraBaixo}>\/</S.ButtonArrow>
		<S.ButtonArrow type="button" onClick={paraCima}>/\</S.ButtonArrow>
		<S.ButtonArrow type="button" onClick={paraDireita}>-</S.ButtonArrow>
		</S.Content>
		<S.Content><S.ImagemPrincipal src={pista1} /></S.Content><S.Content>
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