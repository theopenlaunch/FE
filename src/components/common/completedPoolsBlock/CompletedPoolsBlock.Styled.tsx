import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.section`
	max-width: 1200px;
	margin: 0 auto;

	@media only screen and (max-width: 1200px) {
		padding: 40px;
	}
`;

export const Header = styled.header`
	display: flex;

	@media only screen and (max-width: 740px) {
		flex-direction: column;
	}
`;

export const Filters = styled.ul`
	display: flex;
	margin-left: 60px;
	align-items: center;

	@media only screen and (max-width: 740px) {
		margin-left: 0;
	}
`;

export const Filter = styled.li`
	list-style-type: none;
	margin-right: 10px;
	color: #fff;
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 15px;

	@media only screen and (max-width: 740px) {
		margin-top: 20px;
		font-size: 14px;
	}
`;

export const Pools = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	margin-top: 40px;
	@media only screen and (max-width: 650px) {
		grid-template-columns: 1fr;
	}
`;

export const Pool = styled.section`
	-webkit-box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
	box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	padding: 20px;
`;

export const ImageWrapper = styled.figure`
	width: 30%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;

	@media only screen and (max-width: 900px) {
		padding: 0 10px;
	}

	@media only screen and (max-width: 400px) {
		width: 100%;
	}
`;

export const PoolImage = styled.img`
	height: 90px;
	width: 90px;
	margin-top: 20px;
`;

export const TextContent = styled.article`
	display: flex;
	flex-direction: column;
	width: 70%;

	@media only screen and (max-width: 700px) {
		width: 100%;
	}
`;

export const PoolHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	@media only screen and (max-width: 1020px) {
		flex-direction: column-reverse;
		align-items: flex-start;
	}
`;

export const Tag = styled.div`
	border-radius: 50px;
	padding: 2px 8px;
	color: #fff;
	padding: 2px 10px;
	margin-right: 5px;
	font-size: 12px;

	@media only screen and (max-width: 1020px) {
		align-self: flex-end;
		margin: 5px 0;
	}
`;

export const PoolText = styled.p`
	font-size: 14px;
	margin-bottom: 20px;
`;

export const TopContent = styled.section`
	display: flex;
	padding-bottom: 40px;

	@media only screen and (max-width: 700px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const BottomContent = styled.section`
	display: flex;
	flex-direction: column;
`;

export const RaiseAmount = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 80px;

	@media only screen and (max-width: 900px) {
		margin-right: 40px;
	}
`;

export const RaiseHeading = styled.h1`
	font-size: 24px;
	font-weight: 700;
	line-height: 20px;

	@media only screen and (max-width: 900px) {
		font-size: 16px;
	}
`;

export const RaiseHeadingSmall = styled.h1`
	font-size: 14px;
	font-weight: 700;
	line-height: 20px;
`;

export const RaiseText = styled.p`
	color: #c0c0c0;
	font-size: 12px;
	font-weight: 500;
	line-height: 20px;
	margin-bottom: 10px;
`;

export const PoolHeading = styled.h1`
	font-size: 24px;
	font-weight: bold;
	line-height: 30px;

	@media only screen and (max-width: 900px) {
		margin-top: 10px;
	}

	@media only screen and (max-width: 400px) {
		align-self: center;
	}
`;

export const ShowMore = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #699bf7;
	cursor: pointer;
	margin-top: 80px;
	text-decoration: none;

	@media only screen and (max-width: 400px) {
		font-size: 14px;
	}
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

export const Visibility = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const RaiseAmountContent = styled.section`
	display: flex;
`;

export const ProgressBarWrapper = styled.div`
	margin-top: 20px;
	width: 100%;
`;

export const BarDataContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;

export const BarDataText = styled.p`
	color: #fc9114;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;

	@media only screen and (max-width: 900px) {
		font-size: 14px;
	}
`;

export const BarDataBLC = styled.p`
	color: #c0c0c0;
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
`;
