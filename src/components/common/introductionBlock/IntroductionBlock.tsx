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
							<Styled.SpecialText>for TON projects</Styled.SpecialText>
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
							<Styled.BoxHeading>What is Community Funding</Styled.BoxHeading>
							<Styled.BoxText>
								Before getting started, let's dig into Tonana Launchpad and what
								it stands for
							</Styled.BoxText>
						</div>
						<Styled.LearnMore>
							<p>Learn More</p>
							<Styled.IconWrapper>
								<ChevronRightIcon />
							</Styled.IconWrapper>
						</Styled.LearnMore>
					</Styled.Box>
					<Styled.Box>
						<div>
							<Styled.BoxHeading>
								Proof-of-work Vesting System
							</Styled.BoxHeading>
							<Styled.BoxText>
								Get to know more about the Tonana Security of Investment
							</Styled.BoxText>
						</div>
						<Styled.LearnMore>
							<p>Learn More</p>
							<Styled.IconWrapper>
								<ChevronRightIcon />
							</Styled.IconWrapper>
						</Styled.LearnMore>
					</Styled.Box>
					<Styled.Box>
						<div>
							<Styled.BoxHeading>How to get started</Styled.BoxHeading>
							<Styled.BoxText>
								Time for action! This guide enlights you on your crypto
								investment path
							</Styled.BoxText>
						</div>
						<Styled.LearnMore>
							<p>Learn More</p>
							<Styled.IconWrapper>
								<ChevronRightIcon />
							</Styled.IconWrapper>
						</Styled.LearnMore>
					</Styled.Box>
					<Styled.Box>
						<div>
							<Styled.BoxHeading>Research & Develoment</Styled.BoxHeading>
							<Styled.BoxText>
								Learn how to use DeFi, DAO and Blockchain to fund startup
								development in the article.
							</Styled.BoxText>
						</div>
						<Styled.LearnMore>
							<p>Learn More</p>
							<Styled.IconWrapper>
								<ChevronRightIcon />
							</Styled.IconWrapper>
						</Styled.LearnMore>
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
