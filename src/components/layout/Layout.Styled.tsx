import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
`;

export const Header = styled.header`
  height: 100px;
  width: 100%;
  background-color: #fff;
`;

export const Navigation = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 1200px) {
    padding: 0 40px;
  }
`;

export const Links = styled.ul`
  width: 260px;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const Link = styled.li`
  font-size: 14px;
  list-style-type: none;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: #fcc914;
  }
`;

export const Logo = styled.img`
  height: 80px;
  width: 120px;
  margin-bottom: 40px;
`;

export const ConnectButton = styled.button`
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

export const Footer = styled.footer`
  background-color: #fafafa;
  padding: 100px 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Socials = styled.figure`
  display: flex;
  margin-bottom: 40px;
`;

export const SocialIcon = styled.img`
  margin: 0 15px;
  cursor: pointer;
`;
