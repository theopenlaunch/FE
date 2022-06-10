import styled from "styled-components";

export const Wrapper = styled.div`
  width: 920px;
  /* max-height: 520px; */
  background-color: #fff;
  border-radius: 12px;
  padding: 38px;
  position: relative;
  position: fixed;

	@media only screen and (max-width: 1024px) {
    width: calc(100% - 150px);
    max-height: calc(100% - 136px);
    overflow: scroll;
  }
  text-align: center;
  padding-top: 64px;
  >span {
    font-size: 24px;
    text-transform: uppercase;
  }
  
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0 0 0;
  text-align: left;
	@media only screen and (max-width: 1024px) {
  display: block;

  }

`

export const LabelId = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

export const CloseBtn = styled.div`
 cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  right: 0;
  top: 0;
  margin: 38px;
  svg {
    width: 28px;
    height: 28px;
  }
  &:hover {
    transform: scale(0.95);
    opacity: 0.5;
  }
`;

export const Data = styled.div`
	@media only screen and (max-width: 1024px) {
    margin: 0 0 0;
  }
  text-align: justify;
margin: 0 0 0 48px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: justify;
  justify-content: center;
`;


export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 0 120px;
  text-align: justify;
  /* width: 380px; */
	@media only screen and (max-width: 1024px) {
  margin: 0;
    
  }
  /* width: 43%; */
  /* background: green; */
  
`;

export const InfoLabel = styled.span`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-width: 350px;
  max-height: 100px;
  overflow-y: scroll;

  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 16px;

  span {
    font-weight: 900;
  }
`;


export const PointsWrapper = styled.div`
display: flex;
justify-content: center;
@media only screen and (max-width: 650px) {
  display:block ;
}
>div{
  margin: 0 24px;
}
p{
  margin: 8px 0;
  text-align: center;

}

`
export const BuyButton = styled.button`

  /* /* margin-top: 50px; * */
  border: none;
  outline: none;
  padding: 10px 65px;
  color: #fff;
  font-size: 16px;
  /* font-weight: 400; */
  background-color: #000;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin: 12px;

  &:hover {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;


export const DonateButton = styled.button`
  background-color: #fc9114;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #fff;
  height: 40px;
  width: 144px;
margin: 24px 0 0 0;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.93);
  }
`;
