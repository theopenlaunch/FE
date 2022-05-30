import React, { useState } from "react";
import styled from "styled-components";
import Redirect from "../redirect/Redirect";

import logo from "../../images/logo.svg";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import discord from "../../images/discord.svg";
import telegram from "../../images/telegram.svg";

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

	@media only screen and (max-width: 1200px) {
		padding: 0 40px;
	}
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
	height: 80px;
	width: 120px;
	margin-bottom: 40px;
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

const Footer = styled.footer`
	background-color: #fafafa;
	padding: 100px 40px 60px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (max-width: 400px) {
		font-size: 14px;
	}
`;

const Socials = styled.figure`
	display: flex;
	margin-bottom: 40px;
`;

const SocialIcon = styled.img`
	margin: 0 15px;
	cursor: pointer;
`;

interface LayoutProps {
	children: React.ReactNode;
}

// выбираем нужный элемент
var target = document.querySelector("iframe");
if (target) {
	// создаем новый экземпляр наблюдателя
	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			document.getElementsByTagName("iframe")[0].style.display =
				"none !important";
		});
	});

	// создаем конфигурации для наблюдателя
	var config = { attributes: true, childList: true, characterData: true };

	// запускаем механизм наблюдения
	observer.observe(target, config);
}

const Layout = ({ children }: LayoutProps) => {
	const [key, setTONwalletKey] = useState("");

	const connectWalletTON = async (setTONwalletKey: any) => {
		try {
			//@ts-ignore
			const ton = window.ton;
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
		<Container>
			<Header>
				<Navigation>
					<Links>
						<Redirect href="/">
							<Link>Home</Link>
						</Redirect>
						<Redirect href="https://app.tonana.org">
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
					<ConnectButton onClick={() => connectWalletTON(setTONwalletKey)}>
						{!key ? (
							"Connect wallet"
						) : (
							<span>{`${key.slice(0, 5)}...${key.slice(-3)}`}</span>
						)}
					</ConnectButton>
				</Navigation>
			</Header>
			{children}
			<Footer>
				<Logo src={logo} alt="logo" />
				<Socials>
					<SocialIcon src={twitter} alt="twitter" />
					<SocialIcon src={facebook} alt="facebook" />
					<SocialIcon src={discord} alt="discord" />
					<SocialIcon src={telegram} alt="telegram" />
				</Socials>
				<p>
					© BlockCzech 2021. All rights Reserved.{" "}
					<a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
				</p>
			</Footer>
		</Container>
	);
};

export default Layout;
