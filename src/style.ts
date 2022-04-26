import styled from "styled-components";

export const Project = styled.div`


margin: 24px ;
padding: 24px;
background: #f7f7f7;
border-radius: 12px;
box-shadow: 0px 0px 12px 4px rgba(0,0,255,.08);
`;

export const Wrapper = styled.div`
max-width: 800px;
margin: 0 auto;
`;

export const Pic = styled.img`
  max-width: 270px;
  min-width: 270px;
  max-height: 270px;
border-radius: 8px;
  margin: 0 24px 0 0;
`

export const Loader = styled.div`
width: 100%;
padding: 4px;
margin: 8px 0;
border-radius: 8px;
/* border-radius: 1px solid black; */
background:#EBEDEF ;
`

export const Percent = styled.div<{percent: number}>`
width: ${({percent})=>percent+"%"};
background:green ;
border-radius: 8px;
padding: 10px;

`

export const Title = styled.span`
text-align: center;
font-size: 24px;
`
export const ContainerProj = styled.div`
  /* max-width: 270px;
  width: 270px; */
  /* display: flex; */

`



export const IconsX = styled.div`
  width: 60px;
  height: 1600px;
  background-color: #fff;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

export const IconsY = styled.div`
  width: 1600px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const NftIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const ZoomWrapper = styled.div<{ isZoomMode: boolean }>`
  transform: ${({ isZoomMode }) => (!isZoomMode ? "scale(0.45) " : "")};
  /* position: ${({ isZoomMode }) => (!isZoomMode ? "flex" : "")};
  top: ${({ isZoomMode }) => (!isZoomMode ? "50%" : "")};
  left: ${({ isZoomMode }) => (!isZoomMode ? "50%" : "")}; */
  /* display: flex; */
`;




export const BuyButton = styled.button`

  /* /* margin-top: 50px; * */
  border: none;
  outline: none;
  padding: 4px 65px;
  color: #fff;
  font-size: 14px;
  /* font-weight: 400; */
  background-color: #000;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  margin: 12px 0;
  width: 100%;

  &:hover {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

export const Center = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
/* width: 800px; */
text-align: center;
`
export const Flex = styled.div`
margin: 0 0 -24px 0;
display: flex;
`