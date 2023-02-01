import { VFC, useState, useEffect, memo } from "react";
import { Modal } from "../Modal";
import * as dayjs from "dayjs";
import Slider from "react-slick";

import {
	Wrapper,
	LabelId,
	CloseBtn,
	FlexWrapper,
	Data,
	InfoText,
	PointsWrapper,
	DataWrapper,
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
		const [link, setLink] = useState("");
		//@ts-ignore
		const date = dayjs(projectData.EndDate).format("DD.MM.YYYY");

		useEffect(() => {
			fetch(projectData.NFTCollectionURL, {
				method: "GET",
			})
				.then((e) => e.json())
				.then((e) => {
					setLink(e.external_link);
				});
		}, []);

		const settings = {
			dots: true,
			arrows: false,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 7000,
		};

		const Sss = Slider as any;

		return (
			<Modal isVisible={isVisible} onClose={toggleModal}>
				<Wrapper>
					<CloseBtn onClick={toggleModal}>X</CloseBtn>
					<span>{projectData.Title}</span>

					<DataWrapper>
						<Sss {...settings} id={"slider"}>
							<img style={{ maxWidth: "250px" }} src={projectData.Picture} />

							{/*							<iframe
								height="250"
								width="250"
								src={`${projectData.VideoLink}?autoplay=1&mute=1`}></iframe>
*/}
						</Sss>
						<Data>
							{projectData.Description}
							<br />
							<br />

							<PointsWrapper>
								<div>
									<p>
										Address:{" "}
										<a
											href={`https://tonscan.org/address/${projectData.NFTCollHash}`}>
											{projectData.NFTCollHash.slice(0, 5)}...
											{projectData.NFTCollHash.slice(-3)}
										</a>
									</p>
									<p>
										Wallet:{" "}
										<a
											href={`https://tonscan.org/address/${projectData.Wallet}`}>
											{projectData.Wallet.slice(0, 5)}...
											{projectData.Wallet.slice(-3)}
										</a>
									</p>

									<p>
										Metadata: <a href={projectData.NFTCollectionURL}>link</a>
									</p>

									<p>
										Presentation:{" "}
										<a href={projectData.PresentationLink}>link</a>
									</p>
								</div>
								<div>
									<p>
										Whitepaper: <a href={projectData.WhitepaperLink}>link</a>
									</p>
									<p>
										External: <a href={link}>link</a>
									</p>
									<p>Max: {projectData.Max} TON</p>
									<p>End: {date}</p>
								</div>
							</PointsWrapper>
						</Data>
					</DataWrapper>
					<DonateButton onClick={() => createInvoice(0.1)}>
						donate 0.1 TON
					</DonateButton>
				</Wrapper>
			</Modal>
		);
	}
);

// fetch("https://launchpad.tonana.org:9967/API/addCollection", {
// 	method: "POST",
// 	headers: { "Content-Type": "application/json" },
// 	body: JSON.stringify({
// 		title: "Plastic",
// 		description:
// 			"Plastic is an ecosystem project that includes virtual bloggers with their own content on TikTok(2.2M) / Instagram (80K), an animated series with adult humor, a thematic metaverse for the plastics community, and a decentralized economy for co-creators.",
// 		image:
// 			"https://yt3.ggpht.com/45Bnpsp16jnYKQLW5oDVsYmUjXMbpq2VGg9sU-JZcjd883nPGy_ObrxpMw2E8Pi2FkosZq6f=s900-c-k-c0x00ffffff-no-rj",
// 		externalUrl: "https://www.tiktok.com/@plastic_by_sisters_lapay",
// 		endDate: 1659773947,
// 		maxFunding: 50000,
// 	}),
// })
// 	.then((e) => e.json())
// 	.then(console.log);

export default PoolDataModal;
