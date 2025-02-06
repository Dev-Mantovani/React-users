import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Title, TopBackground, Container, Form, ContainerInputs, Input, Button, InputLabel } from './styles'
import UsersImage from './assets/users.png'

function Home() {

  return (
    <>
      <Container
      >
        <TopBackground>
        <img src={UsersImage} alt='imagem-usuarios'/>
        </TopBackground>


        <Form>
          <Title>Cadastro de Usuario</Title>
          <ContainerInputs>
            <div>
              <div>
                <InputLabel> Nome <span>*</span>
                </InputLabel>
                <Input type='text' placeholder='Nome do usuário'></Input>
              </div>

              <div>
                <InputLabel> Idade <span>*</span>
                </InputLabel>
                <Input type='number' placeholder='Idade do usuário'></Input>
              </div>

              <div>
                <InputLabel> E-mail <span>*</span>
                </InputLabel>
                <Input type='email' placeholder='E-mail do usuário'></Input>
              </div>
            </div>
          </ContainerInputs>

          <Button>Cadastrar Usuario</Button>
        </Form>
      </Container>

    </>



  )
}


export default Home

/* "Export Default" > Um export só por pagina
  "Export function xx" () > Caso precisa exportar mais de uma função,
  inserir export antes da função
  */
