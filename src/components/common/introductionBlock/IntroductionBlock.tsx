import React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Heading01 } from "../../../utils/Heading";
import * as Styled from "./IntroductionBlock.Styled";

import banana from "../../../images/banana.png";

const IntroductionBlock = () => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.TopContent>
					<Styled.TextContent>
						<Heading01>
							Community&#8209;run NFT&#8209;based launchpad{" "}
							<Styled.SpecialText>for SOL projects</Styled.SpecialText>
						</Heading01>
						<Styled.Links>
							<a href={"https://x18oi9qoftd.typeform.com/to/RqK4yWuM"}>
								<Styled.Link style={{ background: "#5DA6E9" }}>
									Apply as a Project{" "}
									<Styled.IconWrapper>
										<ChevronRightIcon />
									</Styled.IconWrapper>
								</Styled.Link>
							</a>
							<a href={"https://app.tonana.org"}>
								<Styled.Link style={{ background: "#C27CFF" }}>
									Tonana bridge{" "}
									<Styled.IconWrapper>
										<ChevronRightIcon />
									</Styled.IconWrapper>
								</Styled.Link>
							</a>
							<a href={"https://t.me/tonanadao"}>
								<Styled.Link style={{ background: "#F0D907" }}>
									Our telegram{" "}
									<Styled.IconWrapper>
										<ChevronRightIcon />
									</Styled.IconWrapper>
								</Styled.Link>
							</a>
							<a href={"https://twitter.com/TonanaBridge"}>
								<Styled.Link style={{ background: "#6CB28D" }}>
									Our twitter{" "}
									<Styled.IconWrapper>
										<ChevronRightIcon />
									</Styled.IconWrapper>
								</Styled.Link>
							</a>
						</Styled.Links>
					</Styled.TextContent>
					<Styled.ImageWrapper>
						<Styled.Banana src={banana} alt="Banana" />
					</Styled.ImageWrapper>
				</Styled.TopContent>
				<Styled.BottomContent>
					<Styled.Box>
						<div>
							<Styled.BoxHeading>What is Tonana Launchpad?</Styled.BoxHeading>
							<Styled.BoxText>
								Tonana Launchpad is a funding platform for creative and research
								projects.
							</Styled.BoxText>
						</div>
						<a
							style={{ textDecoration: "none", color: "white" }}
							href={
								"https://wiki.tonana.org/tonana-defi-hub/launchpad/whitepaper/what-is-tonana-launchpad"
							}>
							<Styled.LearnMore>
								<p>Learn More</p>
								<Styled.IconWrapper>
									<ChevronRightIcon />
								</Styled.IconWrapper>
							</Styled.LearnMore>
						</a>
					</Styled.Box>
					<Styled.Box>
						<div>
							<Styled.BoxHeading>How tonana bridge works?</Styled.BoxHeading>
							<Styled.BoxText>
								Tonana cross-chain bridge uses a lock-and-mint model for moving
								value between chains.
							</Styled.BoxText>
						</div>
						<a
							style={{ textDecoration: "none", color: "white" }}
							href={
								"https://wiki.tonana.org/tonana-defi-hub/bridge/whitepaper/how-it-works"
							}>
							<Styled.LearnMore>
								<p>Learn More</p>
								<Styled.IconWrapper>
									<ChevronRightIcon />
								</Styled.IconWrapper>
							</Styled.LearnMore>
						</a>
					</Styled.Box>
					<Styled.Box>
						<div>
							<Styled.BoxHeading>Wich chains Tonana support?</Styled.BoxHeading>
							<Styled.BoxText>
								Tonana DeFi hub products works with TON; SOLANA; NEAR and other
								chains.
							</Styled.BoxText>
						</div>
						<a
							style={{ textDecoration: "none", color: "white" }}
							href={"https://wiki.tonana.org/supported-chains"}>
							<Styled.LearnMore>
								<p>Learn More</p>
								<Styled.IconWrapper>
									<ChevronRightIcon />
								</Styled.IconWrapper>
							</Styled.LearnMore>
						</a>
					</Styled.Box>
					<Styled.Box>
						<div>
							<Styled.BoxHeading>How Tonana Launchpad works?</Styled.BoxHeading>
							<Styled.BoxText>
								Creators can submit their project. If people like the project,
								they can donate money to make it happen
							</Styled.BoxText>
						</div>
						<a
							style={{ textDecoration: "none", color: "white" }}
							href={
								"https://wiki.tonana.org/tonana-defi-hub/launchpad/whitepaper/how-it-works"
							}>
							<Styled.LearnMore>
								<p>Learn More</p>
								<Styled.IconWrapper>
									<ChevronRightIcon />
								</Styled.IconWrapper>
							</Styled.LearnMore>
						</a>
					</Styled.Box>
				</Styled.BottomContent>
				<Styled.ViewMore href="#upcoming_pools">
					<p>View More</p>
					<Styled.IconWrapper style={{ margin: "12px 0 0 0" }}>
						<ChevronDownIcon />
					</Styled.IconWrapper>
				</Styled.ViewMore>
			</Styled.Content>
		</Styled.Container>
	);
};

export default IntroductionBlock;
