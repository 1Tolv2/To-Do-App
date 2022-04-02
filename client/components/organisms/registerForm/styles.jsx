import styled from "styled-components";
import {theme} from '../../../styles/index'

const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
a {
    color: ${theme.colors.blueMain};
}
`


export {Container}