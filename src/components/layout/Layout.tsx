import React from "react";
import Redirect from "../redirect/Redirect";
import * as Styled from "./Layout.Styled";

import logo from "../../images/logo.svg";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import discord from "../../images/discord.svg";
import telegram from "../../images/telegram.svg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Navigation>
          <Styled.Links>
            <Redirect href="/">
              <Styled.Link>Home</Styled.Link>
            </Redirect>
            <Redirect href="https://tonana.org">
              <Styled.Link>Tonana Bridge</Styled.Link>
            </Redirect>
            {/* <Redirect href="/staking-farming">
              <Link>Staking/Farming</Link>
            </Redirect>
            <Redirect href="/claims">
              <Link>Claims</Link>
            </Redirect> */}
          </Styled.Links>
          {/* <Redirect href="/">
            <Logo src={logo} alt="logo" />
          </Redirect> */}
          <Styled.ConnectButton>Connect wallet</Styled.ConnectButton>
        </Styled.Navigation>
      </Styled.Header>
      {children}
      <Styled.Footer>
        <Styled.Logo src={logo} alt="logo" />
        <Styled.Socials>
          <Styled.SocialIcon src={twitter} alt="twitter" />
          <Styled.SocialIcon src={facebook} alt="facebook" />
          <Styled.SocialIcon src={discord} alt="discord" />
          <Styled.SocialIcon src={telegram} alt="telegram" />
        </Styled.Socials>
        <p>
          © BlockCzech 2021. All rights Reserved.{" "}
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </p>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Layout;
