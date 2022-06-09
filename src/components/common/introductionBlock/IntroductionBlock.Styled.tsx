import styled from "styled-components";

export const Container = styled.main`
	min-height: 100vh;
	overflow: hidden;
`;

export const Content = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 40px 0;
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: 1200px) {
		padding: 40px;
	}
`;

export const TopContent = styled.section`
	display: grid;
	grid-template-columns: 2fr 1fr;
	margin-bottom: 80px;

	@media only screen and (max-width: 880px) {
		grid-template-columns: 1fr;
		justify-items: center;
	}
`;

export const BottomContent = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;

	@media only screen and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media only screen and (max-width: 400px) {
		grid-template-columns: 1fr;
	}
`;

export const TextContent = styled.article`
	display: flex;
	flex-direction: column;
`;

export const IconWrapper = styled.figure`
	height: 20px;
	width: 20px;
	margin-left: 10px;

	svg {
		height: 100%;
		width: 100%;
	}
`;

export const SpecialText = styled.u`
	text-decoration: none;
	color: #a259ff;
`;

export const ImageWrapper = styled.figure`
	height: 360px;
	width: 540px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 900px) {
		height: 260px;
		width: 100%;
		margin-top: 40px;
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 400px) {
		overflow: hidden;
	}
`;

export const Banana = styled.img`
	height: 98%;
	width: 98%;
	-webkit-animation: spin 30s linear infinite;
	-moz-animation: spin 30s linear infinite;
	animation: spin 30s linear infinite;

	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@media only screen and (max-width: 900px) {
		width: 360px;
	}
`;

export const Links = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
	max-width: 500px;
	a {
		text-decoration: none;
	}
`;

export const Link = styled.li`
	color: #fff;
	width: fit-content;
	padding: 10px 20px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 20px 10px 0;
`;

export const Box = styled.div`
	background-color: #fcc914;
	color: #fff;
	padding: 20px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const BoxHeading = styled.h2`
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 10px;
`;

export const BoxText = styled.p`
	font-size: 14px;
	font-weight: 500;
`;

export const LearnMore = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	margin-top: 20px;
	cursor: pointer;
`;

export const ViewMore = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #699bf7;
	cursor: pointer;
	margin-top: 80px;
	text-decoration: none;

	@media only screen and (max-width: 400px) {
		font-size: 14px;
	}
`;
