import { VFC, useState, useEffect, memo } from "react";
import { Modal } from "../Modal";
import QRCode from "react-qr-code";
// import { CloseOutlined } from "@ant-design/icons";
import { MakeTrx, listener } from "../../logic/MakeTrx";
import TonWeb from "tonweb";
// import { Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";

import {
	Wrapper,
	LabelId,
	CloseBtn,
	FlexWrapper,
	InfoBlock,
	InfoText,
	BuyButton,
} from "./style";

const ModalInvoice: VFC<any> = memo(
	({ isVisible, toggleInvoiceMode, projectWallet, projectId, NFTcost }) => {
		const [hex, setHex] = useState<string>("");
		const [isLoad, setIsload] = useState<boolean>(false);
		const link = `ton://transfer/${projectWallet}?amount=${TonWeb.utils.toNano(
			(1 * NFTcost).toFixed(3)
		)}&text=${hex}${projectId}`;
		console.log(link);
		useEffect(() => {
			setHex(
				Array(16)
					.fill("")
					.map(() => Math.round(Math.random() * 0xf).toString(16))
					.join("")
			);
		}, [projectId]);

		//@ts-ignore
		const code = <QRCode value={link} />;

		return (
			<Modal isVisible={isVisible} onClose={toggleInvoiceMode}>
				<Wrapper>
					<CloseBtn onClick={toggleInvoiceMode}>X</CloseBtn>
					<LabelId>Invoice #{hex}</LabelId>
					{isLoad ? (
						<span
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							loading...
						</span>
					) : (
						<>
							<FlexWrapper>
								{/* {code} */}
								<InfoBlock>
									<InfoText>
										<span>Description: </span>
										Pay for project ID {projectId}
									</InfoText>

									<BuyButton
										onClick={() =>
											MakeTrx(hex, projectId, NFTcost, projectWallet)
										}>
										SOl wallet
									</BuyButton>

									{/* <a href={link}>
										<BuyButton>Link</BuyButton>
									</a> */}

									{/* <BuyButton
										onClick={() =>
											listener(hex, setIsload, projectId, projectWallet)
										}>
										I paid
									</BuyButton> */}
								</InfoBlock>
							</FlexWrapper>
						</>
					)}
				</Wrapper>
			</Modal>
		);
	}
);

export default ModalInvoice;
