import { useRef } from 'react'
import api from '../../services/api'

import { Title, TopBackground, Container, Form, ContainerInputs, Input, Button, InputLabel } from './styles'
import UsersImage from '../../assets/users.png'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser() {
   const data = await api.post('http://localhost:3000/usuarios',{

    email: inputEmail.current.value,
    age: parseInt(inputAge.current.value),
    name: inputName.current.value

   })

   console.log (data)
 }
 

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
                <InputLabel> Nome <span>*</span>
                </InputLabel>
                <Input type='text' placeholder='Nome do usuário' ref={inputName}></Input>
              </div>

              <div>
                <InputLabel> Idade <span>*</span>
                </InputLabel>
                <Input type='number' placeholder='Idade do usuário' ref={inputAge}></Input>
              </div>
          </ContainerInputs>
              <div style={{width: '100%'}}>
                <InputLabel> E-mail <span>*</span>
                </InputLabel>
                <Input type='email' placeholder='E-mail do usuário' ref={inputEmail}></Input>
              </div>
            
          

          <Button type='button' onClick={registerNewUser}>Cadastrar Usuario</Button>
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
