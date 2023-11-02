import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import styled, { createGlobalStyle } from "styled-components";
import * as Styled from "./Layout.Styled";
import SignUpForm from "../pages/signUp/SignUpForm";
import SignInForm from "../pages/signIn/SignInForm";

// Set the top level element for the modal. Replace '#root' with your actual root element's id.
Modal.setAppElement('#root');

interface LayoutProps {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  .ReactModal__Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    z-index: 1000;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    background: #fff;
    overflow: auto;
    WebkitOverflowScrolling: touch;
    border-radius: 30px;
    outline: none;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;



const Layout = ({ children }: LayoutProps) => {
  const [key, setTONwalletKey] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signup" || location.pathname === "/signin") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [location]);

  const closeModal = () => {
    setModalOpen(false);
    history.push("/"); 
  };

  const handleSignUpClick = () => {
    history.push("/signup");
  };

  const handleSignInClick = () => {
    history.push("/signin");
  };

  const connectWalletTON = async () => {
    try {
      //@ts-ignore // TODO add types for .ton
      const ton = window.TonWeb();
      if (ton) {
        const accounts = await ton.send("ton_requestWallets");
        setTONwalletKey(accounts[0].address);
      }
    } catch (err) {
      alert("Install TonWallet. Close all TonWallet windows and try again.");
      console.log(err);
    }
  };

  return (
	<Styled.Container>
	  <GlobalStyle />
	  <Styled.Header>
		<Styled.Navigation>
		  <Styled.Links>
			{/* Other links go here */}
			<a href="/">
			  <Styled.Link>Home</Styled.Link>
			</a>
			{/* More links can be added here */}
		  </Styled.Links>
		  <Styled.ButtonGroup>
			<Styled.ConnectButton onClick={handleSignUpClick}>
			  Sign Up
			</Styled.ConnectButton>
			<Styled.ConnectButton onClick={handleSignInClick}>
			  Sign In
			</Styled.ConnectButton>
			<Styled.ConnectButton onClick={connectWalletTON}>
			  Sign Up with Wallet
			</Styled.ConnectButton>
		  </Styled.ButtonGroup>
		</Styled.Navigation>
	  </Styled.Header>
	  
	  {/* Only render children when the modal is not open */}
	  {!isModalOpen && children}
	  
	  <Styled.Footer>
		{/* Footer content goes here */}
		<p>
		  © The Open Launch 2023. All rights Reserved.{" "}
		  <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
		</p>
		<br />v 0.0.1 (beta)
	  </Styled.Footer>
	  
	  <Modal
		isOpen={isModalOpen}
		onRequestClose={closeModal}
		contentLabel="Authentication Modal"
		className="ReactModal__Content"
		overlayClassName="ReactModal__Overlay"
	  >
		{location.pathname === "/signup" && <SignUpForm />}
		{location.pathname === "/signin" && <SignInForm />}
	  </Modal>
	</Styled.Container>
  );
  
  }
export default Layout;
