import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const TabContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LeftTab = styled.div`
  position: absolute;
  left: 0;
  height: 70vh;
  width: 100%;
  transition: all 0.6s ease-out;
  &.open {
    transform: translateY(-100%);
    box-shadow: 0px 5px 20px #262626;
  }
`;
const RightTab = styled.div`
  position: absolute;
  left: 0;
  height: 69vh;
  width: 100%;
  #register {
    left: 150px;
  }
  h2 {
    left: 160px;
  }
  box-shadow: 0px 5px 20px #262626;
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
  left: 10px;
  width: 120px;
  height: 45px;
  border-radius: 7px 7px 0 0;
  background-color: ${(props) => props.bgColor};
  transform: perspective(5px) rotateX(1deg);
  text-align: center;
  
`;

const TabTitle = styled.h2`
  position: absolute;
  top: -65px;
  left: 20px;
  width: 100px;
  font-weight: 400;
  font-size: 1.7em;
  transition: 0.2s;
  pointer-events: none;
`;

export {
  Container,
  TabContainers,
  LeftTab,
  RightTab,
  Tab,
  TabTitle,
  Section,
};
