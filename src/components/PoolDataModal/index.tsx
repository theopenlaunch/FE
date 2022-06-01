import { VFC, useState, useEffect, memo } from "react";
import { Modal } from "../Modal";

import {
	Wrapper,
	LabelId,
	CloseBtn,
	FlexWrapper,
	InfoBlock,
	InfoText,
	Cell,
	InfoLabel,
	DonateButton,
} from "./style";

type Props = {
	isVisible: boolean;
	toggleModal: () => void;
	projectData: any;
	createInvoice: any;
};

const PoolDataModal: VFC<Props> = memo(
	({ isVisible, toggleModal, projectData, createInvoice }) => {
		return (
			<Modal isVisible={isVisible} onClose={toggleModal}>
				<Wrapper>
					<CloseBtn onClick={toggleModal}>X</CloseBtn>
					<br />
					<br />
					<br />
					Title: {projectData.Title}
					<br />
					<br />
					DATA:
					<br />
					{JSON.stringify(projectData)}
					<br />
					<br />
					<DonateButton onClick={() => createInvoice(0.1)}>
						donate 0.1
					</DonateButton>
					<DonateButton onClick={() => createInvoice(0.2)}>
						donate 0.2
					</DonateButton>
					<DonateButton onClick={() => createInvoice(0.3)}>
						donate 0.3
					</DonateButton>
				</Wrapper>
			</Modal>
		);
	}
);

export default PoolDataModal;
