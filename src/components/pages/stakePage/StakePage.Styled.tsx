import styled from "styled-components";

export const Container = styled.main`
  background-color: #fafafa;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 120px;
`;

export const TextWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  -webkit-box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
  box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  padding: 20px;
`;

export const Tags = styled.section`
  display: flex;
  font-size: 18px;
  margin-bottom: 40px;
`;

export const Tag = styled.div<{ activeTag: number; index: number }>`
  margin-right: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.activeTag === props.index ? "#F1F5FE" : "transparent"};
  color: ${(props) =>
    props.activeTag === props.index ? "#FC9114" : "#c0c0c0"};
  border-radius: 20px;
  padding: 5px 15px;

  &:hover {
    color: ${(props) =>
      props.activeTag !== props.index ? "#fcc914" : "FC9114"};
  }
`;

export const Days = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  height: 84px;
  margin-top: 20px;
`;

export const Day = styled.div<{ activeDay: number; index: number }>`
  background-color: ${(props) =>
    props.activeDay === props.index ? "#FC9114" : "#f1f5fe"};
  color: ${(props) => (props.activeDay === props.index ? "#fff" : "#5DA6E9")};
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Info = styled.section`
  color: #4f4f4f;
  margin-top: 20px;
  line-height: 40px;
`;

export const Balance = styled.section`
  color: #fc9114;
  font-weight: 800;
  margin-top: 40px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: #fc9114;
  color: #fff;
  height: 60px;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 40px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.93);
  }
`;
