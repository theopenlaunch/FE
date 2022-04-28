import { VFC, useEffect, useState } from "react";
import Container from "./components/Container";
import OpenOnDesktop from "./components/OpenOnDesktop";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
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
import * as dayjs from "dayjs";

const App: VFC = () => {
	const [bigArr, setBigArr] = useState({ status: [] });
	const [isModal, setIsBuyMode] = useState<boolean>(false);
	const [id, setId] = useState<number>(0);

	useEffect(() => {
		(async () => {
			setBigArr(await GetStatus());
		})();
	}, []);

	const { width } = useWindowDimensions();

	if (width < 768) {
		return <OpenOnDesktop />;
	}
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
