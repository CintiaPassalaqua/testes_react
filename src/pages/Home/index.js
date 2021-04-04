import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled'
import '../../style.css';
import pista1 from './../../img/pista1.png';
import ash1 from './../../img/ash.jpg';
import ash2 from './../../img/ash2.jpg';
import egg from './../../img/easteregg.png';
import Canvas from './Canvas';

function App(props) {
  const [ procura, setProcura ] = useState('');
  const [ yi, setYi ] = useState(750);
  const [ xi, setXi ] = useState(-450);
  const [ s, setS ] = useState(3/2);
  const spots = [[10*s,190*s-300],[10*s,170*s-300],[30*s,190*s-300],[30*s,170*s-300],
										[470*s,190*s-300],[470*s,170*s-300],[490*s,190*s-300],[490*s,170*s-300],
										[390*s,-50*s-300],[390*s,-70*s-300],[410*s,-50*s-300],[410*s,-70*s-300]];
  const [ boxes, setBoxes ] = useState([[390*s,-90*s-300],[390*s,-130*s-300],[370*s,-110*s-300],[350*s,-90*s-300],
										[390*s,-190*s-300],[390*s,-210*s-300],[370*s,-210*s-300],[350*s,-190*s-300],
										[590*s,-150*s-300],[590*s,-110*s-300],[570*s,-170*s-300],[550*s,-150*s-300]]);
  const [ pontos, setPontos ] = useState(0);
  const [ personagem, setPersonagem ] = useState(ash1);
  const [ acerto, setAcerto] = useState(false);
  const [ mensagem, setMensagem ] = useState([]);
  const pos = 130*s;
  const posH = 70*s;
  const { id } = useParams()
  const paredes = [[0,0,-140,0],[0,160,-140,-140],[200,200,-140,-100],[140,200,-100,-100],[140,140,-100,0],[0,140,0,0], //quarto1
					[160,160,-180,-140],[160,240,-180,-180],[290,340,-180,-180],[340,340,-180,-175],[340,340,-145,-135],[200,350,-100,-100], //escritorio
				   [340, 500, -140, -140],[500,500,-280,-140],[380,500,-280,-280],[380,380,-280,-180],[340,380,-180,-180], //quarto2
				   [500,500,-140,0],[380,500,0,0],[380,380,-100,0],[340,380,-100,-100], //quarto3
				    [240,240,-200,-180],[200,240,-200,-200],[200,200,-380,-200],[200,270,-380,-380],[280,280,-440,-380],[270,530,-440,-440], [520,520,-440,-380],
					[530,630,-380,-380],[620,620,-380,-220],[530,630,-220,-220],[540,540,-300,-220],[520,530,-300,-300],[520,520,-300,-280],[340,520,-280,-280],[340,340,-280,-180],[290,340,-200,-200],[280,280,-200,-180]]
  
  
  function handlePesquisa() { 
	if (procura==='a') {
		setMensagem(["Pista 1 "+id,"bhdbf sdhfdg fsdfsdgfh sdfhgsdyfgefg y efysg duyf gsduyfg suyd f"]);
		setAcerto(true)
		setS(3/2);
		return;	
	}
	setMensagem("");
  }
  
  function podeIr(dx, dy, m) {
	  var id = paredes.findIndex((p) => p[0]*s+xi-5<posH+dx*m && p[1]*s+xi+5>posH+dx*m && p[2]*s+yi-5<pos+dy*m && p[3]*s+yi+5>pos+dy*m);
	  if (id>-1) return -2
	  id = boxes.findIndex((p) => p[0]+xi===posH+dx && p[1]+yi===pos+dy);
	  if (id>-1) return id
	  return -1
  }
  
  function paraCima() { 
	var id = podeIr(0,-20*s, 1/2);
	if (id===-2) { return } //parede
	if (id>-1) { 
	var id2 = podeIr(0,-40*s, 3/4);
	if (id2!==-1) { return }
		var pt0 = spots.findIndex((p) => p[0]===boxes[id][0] && p[1]===boxes[id][1]);
		var pt1 = spots.findIndex((p) => p[0]===boxes[id][0] && p[1]===boxes[id][1]-20*s);
		if (pt0>-1 && pt1===-1) setPontos(pontos-1);
		if (pt1>-1 && pt0===-1) setPontos(pontos+1);
		var teste = boxes
		teste[id] = [boxes[id][0],boxes[id][1]-20*s]
		setBoxes(teste);
		}
	setYi(yi+20*s);
  } 
  function paraBaixo() { 
	var id = podeIr(0,20*s, 1/2);
	if (id===-2) { return } //parede
	if (id>-1) { 
	var id2 = podeIr(0,40*s, 3/4);
	if (id2!==-1) { return }
		var pt0 = spots.findIndex((p) => p[0]===boxes[id][0] && p[1]===boxes[id][1]);
		var pt1 = spots.findIndex((p) => p[0]===boxes[id][0] && p[1]===boxes[id][1]+20*s);
		if (pt0>-1 && pt1===-1) setPontos(pontos-1);
		if (pt1>-1 && pt0===-1) setPontos(pontos+1);
		var teste = boxes
		teste[id] = [boxes[id][0],boxes[id][1]+20*s]
		setBoxes(teste);
		}
	setYi(yi-20*s);
  }
  function paraDireita() { 
	setPersonagem(ash1);
	var id = podeIr(20*s, 0, 1/2);
	if (id===-2) { return } //parede
	if (id>-1) { 
	var id2 = podeIr(40*s, 0, 3/4);
	if (id2!==-1) { return }
		var pt0 = spots.findIndex((p) => p[0]===boxes[id][0] && p[1]===boxes[id][1]);
		var pt1 = spots.findIndex((p) => p[0]===boxes[id][0]+20*s && p[1]===boxes[id][1]);
		if (pt0>-1 && pt1===-1) setPontos(pontos-1);
		if (pt1>-1 && pt0===-1) setPontos(pontos+1);
		var teste = boxes
		teste[id] = [boxes[id][0]+20*s,boxes[id][1]]
		setBoxes(teste);
		}
	setXi(xi-20*s);
  }
  function paraEsquerda() {
	setPersonagem(ash2);
	console.log(pontos);
	var id = podeIr(-20*s, 0, 1/2);
	if (id===-2) { return } //parede
	if (id>-1) { 
	var id2 = podeIr(-40*s, 0, 3/4);
	if (id2!==-1) { return }
		var pt0 = spots.findIndex((p) => p[0]===boxes[id][0] && p[1]===boxes[id][1]);
		var pt1 = spots.findIndex((p) => p[0]===boxes[id][0]-20*s && p[1]===boxes[id][1]);
		if (pt0>-1 && pt1===-1) setPontos(pontos-1);
		if (pt1>-1 && pt0===-1) setPontos(pontos+1);
		var teste = boxes
		teste[id] = [boxes[id][0]-20*s,boxes[id][1]]
		setBoxes(teste);
		}
	setXi(xi+20*s);
  }
  
 
  				
  function displayInput() { 
	var draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#FFFFFF'
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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
		
		
		
		ctx.strokeStyle = '#4499DD'
		ctx.fillStyle = '#CCEEFF'
ctx.lineWidth = 2;
	for (var i = 0; i < spots.length; i++) {
		ctx.fillRect(spots[i][0]+xi-9*s,spots[i][1]+yi-9*s, 2*9*s,2*9*s);
		ctx.strokeRect(spots[i][0]+xi-9*s,spots[i][1]+yi-9*s, 2*9*s,2*9*s);
	}
		ctx.fillStyle = '#000000'
		var imageObj1 = new Image();
    imageObj1.src = personagem
     ctx.drawImage(imageObj1,posH-9*s, pos-9*s, 2*9*s,2*9*s);
		var imageObj2 = new Image();
		imageObj2.src = egg
	for (i = 0; i < boxes.length; i++) {
		ctx.drawImage(imageObj2,boxes[i][0]+xi-7*s,boxes[i][1]+yi-7*s, 2*7*s,2*7*s);
	}
	
		
		
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

//escritorio
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5*s;
ctx.moveTo(xi+160*s, yi-140*s);
ctx.lineTo(xi+160*s, yi-180*s);
ctx.lineTo(xi+240*s, yi-180*s);
ctx.moveTo(xi+290*s, yi-180*s);
ctx.lineTo(xi+340*s, yi-180*s);
ctx.lineTo(xi+340*s, yi-175*s);
ctx.moveTo(xi+340*s, yi-145*s);
ctx.lineTo(xi+340*s, yi-135*s);
ctx.moveTo(xi+350*s, yi-100*s);
ctx.lineTo(xi+200*s, yi-100*s);
ctx.stroke(); // Draw it


//quarto do Mateus
ctx.beginPath();
ctx.strokeStyle = "green";
var x = xi+340*s
var y = yi-140*s
var ns = 20*s
ctx.lineWidth = 5*s;
ctx.moveTo(x, y);
x += 8*ns;
ctx.lineTo(x, y);
y -= 7*ns;
ctx.lineTo(x, y);
x -= 6*ns;
ctx.lineTo(x, y);
y += 4*ns;
ctx.lineTo(x, y);
y += 1*ns;
x -= 0.5*ns;
ctx.lineTo(x, y);
x -= 1.5*ns;
ctx.lineTo(x, y);
ctx.stroke(); // Draw it

//quarto da Bia
ctx.beginPath();
ctx.strokeStyle = "green";
x = xi+340*s+8*ns;
y = yi-140*s;
ctx.lineWidth = 5*s;
ctx.moveTo(x, y);
y += 7*ns;
ctx.lineTo(x, y);
x -= 6*ns;
ctx.lineTo(x, y);
y -= 4*ns;
ctx.lineTo(x, y);
y -= 1*ns;
x -= 0.5*ns;
ctx.lineTo(x, y);
x -= 1.5*ns;
ctx.lineTo(x, y);
ctx.stroke(); // Draw it


//sala
ctx.beginPath();
ctx.strokeStyle = "green";
x = xi+240*s;
y = yi-180*s;
ctx.lineWidth = 5*s;
ctx.moveTo(x, y);
y -= 1*ns;
ctx.lineTo(x, y);
x -= 2*ns;
ctx.lineTo(x, y);
y += 1*ns;
ctx.moveTo(x, y);
y -= 10*ns;
ctx.lineTo(x, y);
x += 3.5*ns;
ctx.lineTo(x, y);
y -= 3*ns;
ctx.lineTo(x, y);
x += 13*ns;
ctx.lineTo(x, y);
y += 3*ns;
ctx.lineTo(x, y);
x += 5*ns;
ctx.lineTo(x, y);
y += 8*ns;
ctx.lineTo(x, y);
x -= 5*ns;
ctx.lineTo(x, y);
y -= 4*ns;
ctx.lineTo(x, y);
x -= 0.5*ns;
ctx.lineTo(x, y);
y += 1*ns;
ctx.lineTo(x, y);
x -= 9*ns;
ctx.lineTo(x, y);
y += 5*ns;
ctx.lineTo(x, y);
y -= 1*ns;
ctx.moveTo(x, y);
x -= 2.5*ns;
ctx.lineTo(x, y);
y += 1*ns;
ctx.lineTo(x, y);
ctx.stroke(); // Draw it


if (pontos===spots.length) {
ctx.beginPath();
ctx.strokeStyle = "red";
x = xi+200*s;
y = yi-190*s;
ctx.lineWidth = 5*s;
ctx.moveTo(x, y);
ctx.lineTo(x+ns, y+ns);
ctx.moveTo(x, y+ns);
ctx.lineTo(x+ns, y);
ctx.stroke(); // Draw it
}

	}
	if (!acerto) {
		return (<><S.Content><Canvas draw={draw} /></S.Content>		
		<S.Content>		
		<S.ButtonArrow type="button" onClick={paraEsquerda}>&#8592;</S.ButtonArrow>
		<S.ButtonArrow type="button" onClick={paraBaixo}>&#8595;</S.ButtonArrow>
		<S.ButtonArrow type="button" onClick={paraCima}>&#8593;</S.ButtonArrow>
		<S.ButtonArrow type="button" onClick={paraDireita}>&#8594;</S.ButtonArrow>
		</S.Content>
		<S.Content><S.ImagemPrincipal src={pista1} /></S.Content><S.Content>
		<S.Input name="bla" id="bli" className="resposta" placeholder="Resposta" value={procura} onKeyDown={handlePesquisa} onChange={e => setProcura(e.target.value.toLowerCase()) } />
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