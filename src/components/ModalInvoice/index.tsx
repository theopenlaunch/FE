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
	BuyButton,
} from "./style";

type Props = {
	isVisible: boolean;
	toggleModal: () => void;
	projectData: any;
};

const ModalInvoice: VFC<Props> = memo(
	({ isVisible, toggleModal, projectData }) => {
		console.log(isVisible);
		console.log(projectData);
		return (
			<Modal isVisible={isVisible} onClose={toggleModal}>
				<Wrapper>
					<CloseBtn onClick={toggleModal}>X</CloseBtn>
					MODAL THING / key: {JSON.stringify(projectData)}
				</Wrapper>
			</Modal>
		);
	}
);

export default ModalInvoice;
