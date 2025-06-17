import styled from "styled-components";

type EspacoProps = {
  altura: string;
  largura: string;
  black?: boolean;
}


export const Espaco = styled.div<EspacoProps>`
    background-color: ${(props) => props.black ? 'black' : 'white'};
    width: ${(props) => props.largura};
    height: ${(props) => props.altura};
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    color: ${(props) => props.black ? 'white' : 'black'};
    text-align: center;
    justify-content: center;

    p {
      font-size: 24px;
    }

  `;


export const Quadrado = styled.div`
    width: 200px;
    background-color: blue;
    height: 200px;
`

export const Botao = styled.button`
  padding: 20px;
  margin-top: 20px;
  background-color: white;
  color: black;
  border-radius: 4px;
  margin-left: 10px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`