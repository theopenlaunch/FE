import React, { useEffect, useState } from "react";
import { Heading02 } from "../../../utils/Heading";
import { ChevronRightIcon } from "@heroicons/react/solid";
import * as Styled from "./UpcomingPoolsBlock.Styled";
import * as dayjs from "dayjs";
import Tilt from "../../../logic/Tilt";
import PoolDataModal from "../../PoolDataModal";
import InvoiceModal from "../../InvoiceModal";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const ClosedPools = (props: any) => {
	const [filtr, setFiltr] = useState("All");
	const [isVisible, toggleModal] = useState(false);
	const [isInvoiceModalVisible, toggleInvoiceModalModal] = useState(false);
	const [projectData, setProjectData] = useState<any>({});
	const [nftCost, setNftCost] = useState<number>(0);

	const modalClick = (e: any) => {
		setProjectData(e);
		toggleModal((prev) => !prev);
	};

	const createInvoice = (cost: number) => {
		toggleModal((prev) => !prev);
		toggleInvoiceModalModal((prev) => !prev);
		setNftCost(cost);
	};

	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.Header>
					<Heading02 id="upcoming_pools">Closed Pools</Heading02>
					<Styled.Filters>
						<Styled.Filter
							style={{ backgroundColor: "#A259FF" }}
							onClick={() => setFiltr("All")}>
							All
						</Styled.Filter>
						<Styled.Filter
							style={{ backgroundColor: "#00ee38ec" }}
							onClick={() => setFiltr("Sci-Fi")}>
							Sci-Fi
						</Styled.Filter>
						<Styled.Filter
							style={{ backgroundColor: "#FF004C" }}
							onClick={() => setFiltr("GameFi")}>
							GameFi
						</Styled.Filter>
						<Styled.Filter
							style={{ backgroundColor: "#aaFe" }}
							onClick={() => setFiltr("DeFi")}>
							DeFi
						</Styled.Filter>
						<Styled.Filter
							style={{ backgroundColor: "#01dddd" }}
							onClick={() => setFiltr("NFTs")}>
							NFTs
						</Styled.Filter>
					</Styled.Filters>
				</Styled.Header>

				{isVisible && (
					<PoolDataModal
						isVisible={isVisible}
						toggleModal={() => toggleModal((prev) => !prev)}
						projectData={projectData}
						createInvoice={createInvoice}
					/>
				)}
				{isInvoiceModalVisible && (
					<InvoiceModal
						isVisible={isInvoiceModalVisible}
						toggleInvoiceMode={() => toggleInvoiceModalModal((prev) => !prev)}
						NFTcost={nftCost}
						projectId={projectData?.Id ? projectData.Id : 0}
						projectWallet={projectData?.Wallet ? projectData.Wallet : ""}
					/>
				)}

				<Styled.Pools>
					{!props.bigArr.status[0] ?
						<svg version="1.1" id="L9" style={{ maxWidth: '50px' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
							<path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
								<animateTransform
									attributeName="transform"
									attributeType="XML"
									type="rotate"
									dur="1s"
									from="0 50 50"
									to="360 50 50"
									repeatCount="indefinite" />
							</path>
						</svg>
						: null}
					{props.bigArr.status
						.filter((e: any) => e.Category === filtr || filtr === "All")
						.filter((e: any) => Number(e.EndDate) < new Date().getTime())
						.map((e: any) =>
							e ? (
								<Tilt
									children={
										<Styled.Pool onClick={() => null}>
											<Styled.ImageWrapper>
												<Styled.PoolImage src={e.Picture} alt="Eclipse" />
											</Styled.ImageWrapper>
											<Styled.TextContent>
												<Styled.PoolHeader>
													<Styled.PoolHeading>{e.Title}</Styled.PoolHeading>
													<Styled.Tags>
														<Styled.Tag
															style={{
																backgroundColor:
																	e.Category === "Sci-Fi"
																		? "#00ee38ec"
																		: e.Category === "GameFi"
																			? "#FF004C"
																			: e.Category === "DeFi"
																				? "#aaFe"
																				: e.Category === "NFTs"
																					? "#01dddd"
																					: "none",
															}}>
															{e.Category}
														</Styled.Tag>
														<Styled.Tag style={{ backgroundColor: "#FF004D" }}>
															{e.EndDate === 10
																? "none"
																: //@ts-ignore
																dayjs().to(dayjs(Number(e.EndDate)))}
															{/* dayjs(Number(e.EndDate)).format('MM/YYYY') */}
														</Styled.Tag>
													</Styled.Tags>
												</Styled.PoolHeader>
												<Styled.PoolText>
													{e.Description.length > 200
														? e.Description.slice(0, 200) + "..."
														: e.Description}
												</Styled.PoolText>
												<Styled.Allocation>
													<Styled.AllocationAmount>
														<Styled.AllocationText>
															Raised (TON)
														</Styled.AllocationText>
														<Styled.AllocationHeading>
															{e.Rised}
														</Styled.AllocationHeading>
													</Styled.AllocationAmount>
													<Styled.AllocationAmount>
														<Styled.AllocationText>
															Maximum (TON)
														</Styled.AllocationText>
														<Styled.AllocationHeading>
															{e.Max}
														</Styled.AllocationHeading>
													</Styled.AllocationAmount>
												</Styled.Allocation>
											</Styled.TextContent>
										</Styled.Pool>
									}
								/>
							) : null
						)}
				</Styled.Pools>
				<Styled.ShowMore href="#">
					<p>Show more</p>
					<Styled.IconWrapper>
						<ChevronRightIcon />
					</Styled.IconWrapper>
				</Styled.ShowMore>
			</Styled.Content>
		</Styled.Container>
	);
};

export default ClosedPools;
