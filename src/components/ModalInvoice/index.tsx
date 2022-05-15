import { VFC, useState, useEffect, memo } from "react";
import { Modal } from "../Modal";
import QRCode from "react-qr-code";
import { CloseOutlined } from "@ant-design/icons";
import { MakeTrx, listener } from "../../logic/MakeTrx";
import TonWeb from "tonweb";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
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
	({ isVisible, toggleInvoiceMode, projectId }) => {
		const [hex, setHex] = useState<string>("");
		const [isLoad, setIsload] = useState<boolean>(false);
		const NFTcost = 0.1;
		const link = `ton://transfer/${
			process.env.REACT_APP_BACK_TON_WALLET
		}?amount=${TonWeb.utils.toNano(
			(1 * NFTcost).toFixed(3)
		)}&text=${hex}${projectId}`;

		useEffect(() => {
			setHex(
				Array(16)
					.fill("")
					.map(() => Math.round(Math.random() * 0xf).toString(16))
					.join("")
			);
		}, [projectId]);

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
							<FlexWrapper>
								<QRCode value={link} />

								<InfoBlock>
									<InfoText>
										<span>Description: </span>
										Pay for project ID {projectId}
									</InfoText>

									<BuyButton onClick={() => MakeTrx(hex, projectId, NFTcost)}>
										TonWeb
									</BuyButton>

									<a href={link}>
										<BuyButton>Link</BuyButton>
									</a>

									<BuyButton
										onClick={() => listener(hex, setIsload, projectId)}>
										I paid
									</BuyButton>
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
