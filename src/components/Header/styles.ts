import {styled} from "styled-components";


export const HeaderConteiner = styled.header`
display: flex;
background-color: #FFFFFF;
align-items: center;
justify-content: space-between;
padding: 1rem 2rem;
`

export const Divider = styled.div`
height: 3px;
background-color: #788793;
width: 90%;
margin: 0 auto;
`

export const LogoWrapper = styled.div`
img{height: 50px;
}
`
export const NavMenu = styled.nav`
display: flex;
gap: 10rem;

    a{
        text-decoration: none;
        color: #030507;

        &:hover{
            text-decoration: underline;
        }

        &.active {
        font-weight: bold;
        text-decoration: underline;
    }

    }
`

export const UserProfile =  styled.div`
display: flex;
align-items: center;

img{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 4px solid #788793;
}
`
