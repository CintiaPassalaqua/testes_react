import styled from 'styled-components';

export const Container = styled.div`
	margin:0 auto;
	max-width: 400px;
`;


export const Content = styled.div`
	display: flex;
	flex-direction: row;
   flex-wrap: wrap;
   flex-flow: row wrap;
   align-content: center;
	align-items: center;
	justify-content: center;
`;


export const P = styled.div`
	margin: 1em;
	display: flex;
   align-content: center;
	align-items: center;
	justify-content: center;
`;


export const Input = styled.input`
	border: 1px solid #ddd;
	height: 1.5rem;
	padding: 0 .5rem;
	border-radius: .25rem 0 0 .25rem;
	
	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const Button = styled.button`
	border: 1px solid #000;
	height: 1.5rem;
	border-radius: 0 .25rem .25rem 0;
	color: #fff;
	background: #000;
	
	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const ButtonArrow = styled.button`
	border: 1px solid #000;
	height: 3.5rem;
	width: 3.5rem;
	margin: 0.5rem;
	border-radius: .5rem .5rem .5rem .5rem;
	color: #fff;
	background: #000;
	touch-action: manipulation;
	font-size: 2rem;
	
	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const ErrorMsg = styled.span`
	display: block;
	font-size: 0.9rem;
	color: red;
	font-weight: 600;
	margin-top: 1rem;
`;

export const Card = styled.div`{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 1.5rem;
  padding: 0;
  text-align: center;
  font-family: arial;
  border-radius: 1rem;
`;

export const Price = styled.p`{
  color: grey;
  font-size: 22px;
`;

export const AddToCart = styled.button`{
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  margin: 0;
  
	&:hover {
		opacity: 0.8;
	}
`;

export const ImagemPrincipal = styled.img`
	background: #FFF;
	border-radius: 1rem 1rem 1rem 1rem;
	margin: 10px;
`;

