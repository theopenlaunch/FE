import { FC, useState, useCallback, createContext } from "react";
import { App } from "../../typings";

const ModalContext = createContext({} as App.ModalContext);

const ModalProvider: FC = (props) => {
	const { children } = props;

	const [isModalActive, setIsModalActive] = useState<boolean>(false);

	const toggleModal = useCallback(() => {
		setIsModalActive((prev) => !prev);
	}, []);

	console.log(isModalActive);

	return (
		<ModalContext.Provider value={{ isModalActive, toggleModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };
