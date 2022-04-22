import styled from "styled-components";
import { theme } from "../../../styles";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  background-color: ${theme.colors.white};
  padding: ${theme.blockMargins.small} ${theme.blockMargins.medium};
`;
const TableHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    display: flex;
    flex-direction: row;
    h3 {
      margin-right: 20px;
      padding: 5px;
      &.active {
        border-bottom: 2px solid ${theme.colors.greenMain};
      }
      cursor: pointer;
    }
  }
  button {
    width: 45px;
    height: 45px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: white;
    &.active {
      background-color: #ccc;
    }
    img {
      height: 30px !important;
    }
  }
`;

const List = styled.ul`
  height: 100%;
  width: 100%;
`;

export { Container, List, TableHead };
