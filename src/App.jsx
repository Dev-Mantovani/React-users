import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Title} from './styles'
import { Container } from './styles'

function App() {

  return (
    <>   
      <Container>
        <h1> Ok CSS</h1>
        <Title>Ok React</Title>
      </Container>
    </>



  )
}


export default App

/* "Export Default" > Um export só por pagina
  "Export function xx" () > Caso precisa exportar mais de uma função,
  inserir export antes da função
  */
