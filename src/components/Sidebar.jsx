import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Top = styled.div``;
const Logo = styled.img`
  background-image: url("./assets/chatgptLogo.svg");
`;
const Middle = styled.div``;
const Bottom = styled.div``;

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <Logo></Logo>
      </Top>
      <Middle></Middle>
      <Bottom></Bottom>
    </Container>
  );
};

export default Sidebar;
