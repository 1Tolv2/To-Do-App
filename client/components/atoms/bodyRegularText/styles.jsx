import styled from "styled-components";
import { theme } from "../../../styles";

const Paragraph = styled.p`
color: ${({type}) => type === error ? theme.colors.orangeMain : "black"};
`

export {Paragraph}