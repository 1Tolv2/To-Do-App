import styled from "styled-components";
import {theme} from "../../../styles/index";

const Container = styled.li`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const InfoContainer = styled.div``
const TagContainer = styled.ul`
display: flex;
flex-direction:row;
flex-wrap: wrap;

li{
    padding: 3px 5px 5px 5px;
    margin: 2px;
    border-radius: 5px;
    height: fit-content;
    background-color: ${theme.colors.yellowMain};
}`

export { Container, InfoContainer, TagContainer };
