import React from "react";
import styled from "styled-components";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Heading01 } from "../../utils/Heading";

import banana from "../../images/banana.png";

const Container = styled.main`
	min-height: 100vh;
	overflow: hidden;
`;

const Content = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 40px 0;
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: 1200px) {
		padding: 40px;
	}
`;

const TopContent = styled.section`
	display: grid;
	grid-template-columns: 2fr 1fr;
	margin-bottom: 80px;

	@media only screen and (max-width: 880px) {
		grid-template-columns: 1fr;
		justify-items: center;
	}
`;

const BottomContent = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;

	@media only screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media only screen and (max-width: 400px) {
		grid-template-columns: 1fr;
	}
`;

const TextContent = styled.article`
	display: flex;
	flex-direction: column;
`;

const IconWrapper = styled.figure`
	height: 20px;
	width: 20px;
	margin-left: 10px;

	svg {
		height: 100%;
		width: 100%;
	}
`;

const SpecialText = styled.u`
	text-decoration: none;
	color: #a259ff;
`;

const ImageWrapper = styled.figure`
	height: 360px;
	width: 540px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 900px) {
		height: 260px;
		width: 100%;
		margin-top: 40px;
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 400px) {
		overflow: hidden;
	}
`;

const Banana = styled.img`
	height: 98%;
	width: 98%;
	-webkit-animation: spin 30s linear infinite;
	-moz-animation: spin 30s linear infinite;
	animation: spin 30s linear infinite;

	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@media only screen and (max-width: 900px) {
		width: 360px;
	}
`;

const Links = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
`;

const Link = styled.li`
	color: #fff;
	width: fit-content;
	padding: 10px 20px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 20px 10px 0;
`;

const Box = styled.div`
	background-color: #fcc914;
	color: #fff;
	padding: 20px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const BoxHeading = styled.h2`
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 10px;
`;

const BoxText = styled.p`
	font-size: 14px;
	font-weight: 500;
`;

const LearnMore = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	margin-top: 20px;
	cursor: pointer;
`;

const ViewMore = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #699bf7;
	cursor: pointer;
	margin-top: 80px;
	text-decoration: none;

	@media only screen and (max-width: 400px) {
		font-size: 14px;
	}
`;

const IntroductionBlock = () => {
	return (
		<Container>
			<Content>
				<TopContent>
					<TextContent>
						<Heading01>
							Community&#8209;run NFT&#8209;based launchpad{" "}
							<SpecialText>for TON projects</SpecialText>
						</Heading01>
						<Links>
							<Link style={{ background: "#5DA6E9" }}>
								Apply as a Project{" "}
								<IconWrapper>
									<ChevronRightIcon />
								</IconWrapper>
							</Link>
							<Link style={{ background: "#C27CFF" }}>
								Buy on Pancakeswap{" "}
								<IconWrapper>
									<ChevronRightIcon />
								</IconWrapper>
							</Link>
							<Link style={{ background: "#F0D907" }}>
								Buy on Kucoin{" "}
								<IconWrapper>
									<ChevronRightIcon />
								</IconWrapper>
							</Link>
							<Link style={{ background: "#6CB28D" }}>
								Buy on Gate.io{" "}
								<IconWrapper>
									<ChevronRightIcon />
								</IconWrapper>
							</Link>
						</Links>
					</TextContent>
					<ImageWrapper>
						<Banana src={banana} alt="Banana" />
					</ImageWrapper>
				</TopContent>
				<BottomContent>
					<Box>
						<div>
							<BoxHeading>What is Community Funding</BoxHeading>
							<BoxText>
								Before getting started, let's dig into Tonana Launchpad and what
								it stands for
							</BoxText>
						</div>
						<LearnMore>
							<p>Learn More</p>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</LearnMore>
					</Box>
					<Box>
						<div>
							<BoxHeading>Proof-of-work Vesting System</BoxHeading>
							<BoxText>
								Get to know more about the Tonana Security of Investment
							</BoxText>
						</div>
						<LearnMore>
							<p>Learn More</p>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</LearnMore>
					</Box>
					<Box>
						<div>
							<BoxHeading>How to get started</BoxHeading>
							<BoxText>
								Time for action! This guide enlights you on your crypto
								investment path
							</BoxText>
						</div>
						<LearnMore>
							<p>Learn More</p>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</LearnMore>
					</Box>
					<Box>
						<div>
							<BoxHeading>Research & Develoment</BoxHeading>
							<BoxText>
								Learn how to use DeFi, DAO and Blockchain to fund startup
								development in the article.
							</BoxText>
						</div>
						<LearnMore>
							<p>Learn More</p>
							<IconWrapper>
								<ChevronRightIcon />
							</IconWrapper>
						</LearnMore>
					</Box>
				</BottomContent>
				<ViewMore href="#upcoming_pools">
					<p>View More</p>
					<IconWrapper style={{ margin: "12px 0 0 0" }}>
						<ChevronDownIcon />
					</IconWrapper>
				</ViewMore>
			</Content>
		</Container>
	);
};

export default IntroductionBlock;
