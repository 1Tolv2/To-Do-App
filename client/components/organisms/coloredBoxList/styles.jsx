import styled from "styled-components";
import { theme } from "../../../styles";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    list-style: none;
    z-index: 1;
    ::-webkit-scrollbar {
      height: 7px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: 0 0 5px ${theme.colors.mauveLight};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.mauveLight};
      border-radius: 10px;
      transition: 0.4s;
      &:hover {
        background-color: #ccc;
      }
    }
  }
`;
const ListBox = styled.div`
  position: relative;
  width: 70%;

`;
const ListFade = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 130px;
  background-image: linear-gradient(to right,transparent, ${theme.colors.mauveLight});
  z-index: 2;
`;

export { Container, ListBox, ListFade };
