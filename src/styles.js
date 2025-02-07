import styled from 'styled-components'



export const Container = styled.div`
background-color: #181f36;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
padding: 20px;
height: 100vh;

`
export const TopBackground = styled.div `
background: linear-gradient(to right, #fe7e5d, #7f3841);
height: 30vh;
width: 90vw;
max-width: 45vw;
border-radius: 30px;
display: flex;
align-items: center;
justify-content: center;

img {
    max-width: 100%;
    max-height: 100%;
}

`
export const Form= styled.form `
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;
max-width: 45vw;
`
export const Title = styled.h2`

color: white;
font-size: 38px;
`
export const ContainerInputs= styled.div `
display: flex;
    gap: 10px;
    

`
export const InputLabel= styled.label `

color: white;
font-size: 12px;

span {
    color: rgb(36, 61, 172);
    font-weight: bold;
}

`

export const Input= styled.input `
border-radius: 10px;
border: 1px solid white;
width: 100%;
padding: 12px 12px;
gap: 20px;
outline: none;

`
export const Button= styled.button `

border: none;
border-radius: 20px;
align-items: center;
justify-content: center;
width: fit-content;
padding: 16px 32px;
color: white;
background: linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%);
cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;

}
`




