import React from "react";
import styled from "styled-components";
import Redirect from "../redirect/Redirect";

import logo from "../../images/logo.svg";

const Container = styled.main`
  min-height: 100vh;
`;

const Header = styled.header`
  height: 100px;
  width: 100%;
  background-color: #fff;
`;

const Navigation = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Links = styled.ul`
  width: 260px;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

const Link = styled.li`
  font-size: 14px;
  list-style-type: none;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: #fcc914;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
  width: 120px;
  cursor: pointer;
`;

const ConnectButton = styled.button`
  background-color: #fc9114;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #fff;
  height: 40px;
  width: 144px;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.93);
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Links>
            <Redirect href="/">
              <Link>Home</Link>
            </Redirect>
            <Redirect href="https://tonana.org">
              <Link>Tonana Bridge</Link>
            </Redirect>
            {/* <Redirect href="/staking-farming">
              <Link>Staking/Farming</Link>
            </Redirect>
            <Redirect href="/claims">
              <Link>Claims</Link>
            </Redirect> */}
          </Links>
          {/* <Redirect href="/">
            <Logo src={logo} alt="logo" />
          </Redirect> */}
          <ConnectButton>Connect wallet</ConnectButton>
        </Navigation>
      </Header>
      {children}
    </Container>
  );
};

export default Layout;
