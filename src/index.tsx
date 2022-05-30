import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { ModalProvider } from "./context/ModalContext";

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<GlobalStyles />
			<App />
		</ModalProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
