import styled from 'styled-components'

const NavContainer = styled.nav`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100%;
padding: 40px 20px;
background-color: white;
h2{
    text-align: center;
}
img {
    width: 100%;
    height: auto;
}
`

const List = styled.ul`
width: 70%;
list-style: none;
padding: 0;
margin: 0 auto;
`
const ListItem = styled.li`
display: flex;
margin: 20px 0;
font-size: 1.3em;
img {
    margin-right: 5px;
}
`

export {NavContainer, List, ListItem}