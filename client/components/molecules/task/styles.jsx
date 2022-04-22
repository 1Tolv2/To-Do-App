import styled from "styled-components";
import {theme} from "../../../styles/index";

const Container = styled.li`
display: grid;
grid-template-columns: 25% auto 10% 13px;
gap: 10px;
grid-template-rows: auto auto;
margin-bottom: 20px;
`
const InfoContainer = styled.div``

const TagContainer = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;

li{
    padding: 3px 5px 5px 5px;
    margin: 2px;
    border-radius: 5px;
    height: fit-content;
    color: white;
    background-color: ${theme.colors.mauveMain};
}`

export { Container, InfoContainer, TagContainer };
