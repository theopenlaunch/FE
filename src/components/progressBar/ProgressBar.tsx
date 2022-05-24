import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
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

const Rectangle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fc9114;
  border-radius: 3px;
`;

interface BarProps {
  percent: number;
}

const ProgressBar = ({ percent }: BarProps) => {
  const [barContent, setBarContent] = useState<JSX.Element[]>();

  function renderBar() {
    let tempBarContent: JSX.Element[] = [];

    for (let i = 0; i < Math.floor(percent / 3); i++) {
      tempBarContent.push(<Rectangle />);
    }

    setBarContent(tempBarContent);
  }

  useEffect(() => {
    renderBar();
  }, []);

  return <Container>{barContent?.map((rectangle) => rectangle)}</Container>;
};

export default ProgressBar;
