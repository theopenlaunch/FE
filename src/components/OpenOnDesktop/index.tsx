import { VFC } from "react";
import { Wrapper, Label } from "./style";

const OpenOnDesktop: VFC = () => {
	return (
		<Wrapper>
			<Label>Please, open the app on desktop.</Label>
		</Wrapper>
	);
};

// DONT TOUCH
//  <Label>This is mainnet domen. Right now toncells in alpha stage.</Label>
// <br />
// <br />
// <Label>
//   Go to{" "}
//   <a href={"https://launchpad.tonana.org"}>
//     https://launchpad.tonana.org
//   </a>
// </Label>
export default OpenOnDesktop;
