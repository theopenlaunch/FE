import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding-bottom: 80px;

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
	cursor: pointer;

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
	> * {
	}

	@media only screen and (max-width: 650px) {
		grid-template-columns: 1fr;
	}
`;

export const Pool = styled.section`
	-webkit-box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
	box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
	display: flex;
	border-radius: 20px;
	padding: 20px;
	cursor: pointer;
	filter: brightness(0.6) blur(1px) grayscale(100%);
	background: white;
	@media only screen and (max-width: 700px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ImageWrapper = styled.figure`
	/* 
	/*  */
	/* display: flex; */
	/* align-items: flex-start; */
	/* justify-content: center; */
	/* height: 100%; */
	width: 30%;
	filter: blur(2px);
	overflow: hidden;
	position: relative;
	margin-right: 20px;
	border-top-left-radius: 14px;
	border-bottom-left-radius: 14px;
	box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);

	@media only screen and (max-width: 900px) {
		/* padding: 0 10px; */
		filter: blur(0px);
		overflow: auto;
		margin-right: 0;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		/* height: 100px; */
		border-radius: 8px;
	}
`;

export const PoolImage = styled.img`
	height: 100%;
	position: absolute;
	/* width: 100%; */
	/* margin-top: 20px; */
	/* max-height: 100%; */
	@media only screen and (max-width: 900px) {
		position: relative;
		height: auto;
		width: 100%;
	}
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

	@media only screen and (max-width: 900px) {
		flex-direction: column;
		justify-content: flex-start;
	}
`;

export const Tags = styled.section`
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	width: 50%;

	@media only screen and (max-width: 900px) {
		width: 100%;
		align-items: center;
		justify-content: flex-start;
		margin-top: 10px;
	}
`;

export const Tag = styled.div`
	border-radius: 50px;
	padding: 2px 8px;
	color: #fff;
	padding: 2px 10px;
	margin-right: 5px;
	font-size: 12px;
`;

export const PoolText = styled.p`
	font-size: 14px;
	margin-bottom: 20px;
`;

export const Allocation = styled.section`
	display: flex;
	align-items: center;
`;

export const AllocationAmount = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
`;

export const AllocationHeading = styled.h1`
	font-size: 24px;
	font-weight: 700;
	line-height: 20px;
`;

export const AllocationText = styled.p`
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
