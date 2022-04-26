import { VFC, useState, useEffect, memo } from "react";
import { Modal } from "../Modal";
import { CLOSE_ICON } from "../../constants/images";
import CellModalEdit from "../CellModalEdit";
import QRCode from "react-qr-code";
import { CloseOutlined } from "@ant-design/icons";
import {
	Wrapper,
	LabelId,
	CloseBtn,
	FlexWrapper,
	InfoBlock,
	InfoText,
	Cell,
	InfoLabel,
	BuyButton,
} from "./style";
import { MakeTrx, listener } from "../../logic/MakeTrx";
import TonWeb from "tonweb";
import { message } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CELL_ID = "0000";
const EDITABLE_CELL_ID = 6;

type Props = {
	isVisible: boolean;
	onClose: () => void;
	id: number;
	locationX: number;
	locationY: number;
	toggleInvoiceMode: () => void;
	activeCellId: number;
	projectId: number;
};

enum Location {
	X = 1,
	Y = 1,
	Z = 4,
}

const CellModalBuy: VFC<any> = memo(
	({ isVisible, toggleInvoiceMode, projectId }) => {
		const [reserved, setReserved] = useState<boolean>(false);
		const [hex, setHex] = useState<string>("");
		const [isLoad, setIsload] = useState<boolean>(false);

		console.log(projectId);
		const NFTcost = 0.1;
		const link = `ton://transfer/${
			process.env.REACT_APP_BACK_TON_WALLET
		}?amount=${TonWeb.utils.toNano(
			(1 * NFTcost).toFixed(3)
		)}&text=${hex}${projectId}`;

		useEffect(() => {
			// message.success("Reserving NFTs...", 10);
			// setIsload(true);
			// fetch(`https://launchpad.tonana.org:9967/API/reserveIds`, {
			// 	method: "POST",
			// 	headers: { "Content-Type": "application/json" },
			// 	body: JSON.stringify({ ids: cellIds }),
			// })
			// 	.then((e: any) => e.json())
			// 	.then((e: any) => {
			// 		setIsload(false);
			// 		console.log(e);
			// 		if (e.status === "ok") {
			// 			message.success("Reserved!", 10);
			// 			setReserved(e.status === "ok");
			// 			setHex(
			// 				Array(16)
			// 					.fill("")
			// 					.map(() => Math.round(Math.random() * 0xf).toString(16))
			// 					.join("")
			// 			);

			// 			// listener(hexString, setIsload, cellIds);
			// 		} else {
			// 			message.error("Already reserved!", 10);
			// 			setReserved(e.status === "ok");
			// 		}
			// });
			setReserved(true);
			setHex(
				Array(16)
					.fill("")
					.map(() => Math.round(Math.random() * 0xf).toString(16))
					.join("")
			);
		}, [projectId]); // TODO add ids

		return (
			<Modal isVisible={isVisible} onClose={toggleInvoiceMode}>
				<Wrapper>
					<CloseBtn onClick={toggleInvoiceMode}>
						<CloseOutlined />
					</CloseBtn>
					<LabelId>Invoice #{hex}</LabelId>
					{isLoad ? (
						<Spin
							indicator={<LoadingOutlined style={{ fontSize: 56 }} spin />}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						/>
					) : (
						<>
							{reserved ? null : <LabelId>NFTs already reserved</LabelId>}

							<FlexWrapper>
								{reserved ? (
									<QRCode value={reserved ? link : "NFTS ALREADY RESERVED"} />
								) : null}
								<InfoBlock>
									{reserved ? (
										<InfoText>
											<span>Description: </span>
											Pay for project ID {projectId}
										</InfoText>
									) : null}

									{reserved ? (
										<BuyButton
											onClick={() =>
												reserved
													? MakeTrx(setIsload, hex, projectId, NFTcost)
													: null
											}>
											TONWEB
										</BuyButton>
									) : null}

									{reserved ? (
										<a href={link}>
											<BuyButton onClick={() => {}}>LINK</BuyButton>
										</a>
									) : null}

									{reserved ? (
										<BuyButton
											onClick={() => listener(hex, setIsload, projectId)}>
											Im payed
										</BuyButton>
									) : null}
								</InfoBlock>
							</FlexWrapper>
						</>
					)}
				</Wrapper>
			</Modal>
		);
	}
);

export default CellModalBuy;
