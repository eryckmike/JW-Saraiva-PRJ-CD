import { styled } from "styled-components";

export const ContainerHome = styled.div`
display: flex;
align-items: center;
padding: 4rem 2rem;
gap: 15rem;

div{
    flex-direction: column;
}
`

export const TabelaDireita = styled.section`
display:grid;
grid-auto-rows:min-content;
gap:24px;
`


export const DashBoardTitulo  = styled.h1`
font-size: 1.3rem;
color: 030507;
padding-left: 1rem;
`

export const DashBoardPainelGest = styled.div`
background-color: #E8EBED;
border: 4px solid #788793;
border-radius:8px;
padding: 2rem;
width: 750px;
height: 550px;

h2{
    font-size: 1.2rem;
}

p{
    font-size: 0.8rem;
}

`

export const DashBoardPainelAusentes = styled.div`
background-color: #E8EBED;
border: 4px solid #788793;
border-radius:8px;
padding: 2rem;
width: 450px;
height: 250px;
`
export const DashBoardPainelCirculacao = styled.div`
background-color: #E8EBED;
border: 4px solid #788793;
border-radius:8px;
padding: 2rem;
width: 450px;
height: 250px;
`
