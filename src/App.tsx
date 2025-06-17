import { useState } from 'react';
import { Botao, Espaco, Section } from './AppStyled';
import './assets/app.css'

export default function App() {

  const [theme, setTheme] = useState(false)

  return (
    <>
      <Espaco largura='100%' altura='300px' black={theme}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, voluptatem!</p>
      </Espaco>
      <Section>
        <Botao onClick={() => {setTheme(!theme)}}>Trocar tema</Botao>
      </Section>
    </>
  )
}


