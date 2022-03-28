import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const TabContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Form = styled.form``;

const LeftTab = styled.div`
  position: absolute;
  left: 0;
  height: 70vh;
  width: 100%;
  transition: all 0.6s ease-out;
  &.open {
    transform: translateY(-100%);
  }
`;
const RightTab = styled.div`
  position: absolute;
  left: 0;
  height: 70vh;
  width: 100%;
  #register {
    left: 150px;
  }
  transition: all 0.6s ease-out;
  &.open {
    transform: translateY(-100%);
  }
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
`;

const Tab = styled.div`
  position: absolute;
  top: -45px;
  border-bottom: 45px solid ${(props) => props.bgColor};
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 150px;
  text-align: center;
`;

const TabTitle = styled.h2`
  position: absolute;
  top: -20px;
  width: 100px;
  font-weight: 400;
  font-size: 1.7em;
  transition: 0.2s;
  pointer-events: none;
`;

const Input = styled.input`
  margin: 10px;
`;



export {
  Container,
  TabContainers,
  LeftTab,
  RightTab,
  Tab,
  TabTitle,
  Form,
  Input,
  Section,
};
