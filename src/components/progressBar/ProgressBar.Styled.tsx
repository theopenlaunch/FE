import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20px;
  background-color: transparent;
  border: 3px solid #fc9114;
  display: grid;
  grid-template-columns: repeat(33, minmax(0, 1fr));
  grid-gap: 0.1rem;
  border-radius: 6px;
  padding: 2px;
`;

export const Rectangle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fc9114;
  border-radius: 3px;
`;
