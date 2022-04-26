import { VFC, useEffect, useState, useCallback } from "react";
import Cells from "./components/Cells";
import Container from "./components/Container";
import DockBar from "./components/DockBar";
import OpenOnDesktop from "./components/OpenOnDesktop";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import { NFT_ICONS } from "./constants/images";
import {
	Wrapper,
	Project,
	Pic,
	BuyButton,
	Loader,
	Percent,
	Title,
	ContainerProj,
	Center,
	Flex,
} from "./style";
import GetStatus from "./logic/GetStatus";
import InvoiceModal from "./components/CellModalInvoice";
import NftViewer from "./components/NftViewer";
import * as dayjs from "dayjs";

// export const nftIcons: string[] = [];

// for (let i = 1; i < 26; i++) {
// 	nftIcons.push(`${NFT_ICONS + i}.png`);
// }

const App: VFC = () => {
	const [bigArr, setBigArr] = useState({ status: [] });
	const [isModal, setIsBuyMode] = useState<boolean>(false);
	const [isZoomMode, setIsZoomMode] = useState<boolean>(false);
	const [onSideBar, setonSideBar] = useState<boolean>(false);
	const [mapVersion, setMapVersion] = useState<number>(0);
	const [id, setId] = useState<number>(0);

	const toggleBuyMode = useCallback(() => {
		setIsBuyMode((prev) => !prev);
	}, []);

	const toggleMap = (mapold: any) => {
		let newMap = mapold + 1;
		if (newMap === 3) newMap = 0;
		setMapVersion(newMap);
	};

	useEffect(() => {
		(async () => {
			setBigArr(await GetStatus());
		})();
	}, []);

	const { width } = useWindowDimensions();

	console.log(bigArr);

	return (
		<Container>
			{isModal && (
				<InvoiceModal
					isVisible={isModal}
					toggleInvoiceMode={() => setIsBuyMode((prev) => !prev)}
					projectId={id}
				/>
			)}

			<Wrapper>
				<Project>
					<ContainerProj>
						<Title>TONANA launchpad</Title>
						<br />
						<b>Total projects: {bigArr.status.length}</b>
						<br />
						<i>v0.0.0.1 (alfa)</i>
					</ContainerProj>
				</Project>
				{bigArr.status.map((e: any) =>
					e ? (
						<Project>
							<Flex>
								<Pic src={e.Picture} />
								<ContainerProj>
									<Title>Project #{e.Id}</Title>
									<br />
									<b>* Title:</b> {e.Title}
									<br />
									<b>* Description:</b> {e.Description}
									<br />
									<b>* Wallet:</b>{" "}
									{`${e.Wallet.slice(0, 5)}...${e.Wallet.slice(-5)}`}
									<br />
									<b>* Levels of support:</b> {JSON.parse(e.NFTsMeta).length}{" "}
									NFTs
									{/* <br /> */}
									{/* NFTColl: {e.Rised} */}
									{/* <br /> */}
									{/* Pic: {e.Picture} */}
									{/* <br /> */}
									<br />
									{e.EndDate === 10 || !e.EndDate ? null : <b>* End date: </b>}
									{e.EndDate === 10
										? ""
										: //@ts-ignore
										  dayjs(Number(e.EndDate)).format("DD/M/YYYY ")}
									<br />
									<b>* Rised:</b> {e.Rised}/{e.Max}TON
									<Loader>
										<Percent percent={e.Max / e.Rised}></Percent>
									</Loader>
									<br />
								</ContainerProj>
							</Flex>
							<Center>
								<BuyButton
									onClick={() => {
										setIsBuyMode((prev) => !prev);
										setId(e.Id);
									}}>
									Donate
								</BuyButton>
								<i>Donate 0.1TON & Get 1 NFT</i>
							</Center>
						</Project>
					) : null
				)}
			</Wrapper>
		</Container>
	);
};

export default App;
