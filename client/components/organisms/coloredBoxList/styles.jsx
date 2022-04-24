import styled from "styled-components";
import { theme } from "../../../styles";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  min-height: 130px;
  margin-bottom: ${theme.blockMargins.small};
  ul {
    display: flex;
    flex-direction: row;
    width: 90%;
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
const ListContainer = styled.div`
  position: relative;
  width: 100%;
`;
const ListFade = styled.div`
  position: absolute;
  top: 0;
  right: 130px;
  width: 50px;
  height: 130px;
  background-image: linear-gradient(to right,transparent, ${theme.colors.mauveLight});
  z-index: 2;
`;

export { Container, ListContainer, ListFade };
