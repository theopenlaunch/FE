import React, { useState } from "react";
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

// FOR TONCELLS // EXAMPLE

// fetch("https://launchpad.tonana.org:9967/API/addCollection", {
// 	method: "POST",
// 	headers: { "Content-Type": "application/json" },
// 	body: JSON.stringify({
// 		title: "Toncells v1",
// 		description:
// 			"TonCells is a 100 by 100 celled field where each cell can be edited. Make your unique NFT even more unique by customizing it how you want. Add picture or edit your own description and mainly do whatever you want!",
// 		image:
// 			"https://i.getgems.io/IbzFfDaWyK3v1FMjzZ005bItg86ircWMI-tps_HE1Ts/rs:fill:200:200:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2l0ZW0vMjdmN2I3ZDEtZDE5MC00MjkyLTlhYWQtNGVkYWNjMzkwNmEz",
// 		externalUrl: "https://app.toncells.org",
// 		endDate: 1655999907020,
// 		maxFunding: 10069,
// 	}),
// })
// 	.then((e) => e.json())
// 	.then(console.log);

const Layout = ({ children }: LayoutProps) => {
	const [key, setTONwalletKey] = useState("");

	const connectWalletTON = async (setTONwalletKey: any) => {
		try {
			//@ts-ignore // TODO add types for .ton
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
		<Styled.Container>
			<Styled.Header>
				<Styled.Navigation>
					<Styled.Links>
						<Redirect href="/">
							<Styled.Link>Home</Styled.Link>
						</Redirect>
						<Redirect href="https://app.tonana.org">
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
					<Styled.ConnectButton
						onClick={() => connectWalletTON(setTONwalletKey)}>
						{!key ? (
							"Connect wallet"
						) : (
							<span>{`${key.slice(0, 5)}...${key.slice(-3)}`}</span>
						)}
					</Styled.ConnectButton>
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
					© LaunchPad 2023. All rights Reserved.{" "}
					<a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
				</p>
				<br />v 0.0.1 (beta)
			</Styled.Footer>
		</Styled.Container>
	);
};

export default Layout;
