import { useState, useEffect } from "react";
import * as Styled from "./ProgressBar.Styled";

interface BarProps {
  percent: number;
}

const ProgressBar = ({ percent }: BarProps) => {
  const [barContent, setBarContent] = useState<JSX.Element[]>();

  function renderBar() {
    let tempBarContent: JSX.Element[] = [];

    for (let i = 0; i < Math.floor(percent / 3); i++) {
      tempBarContent.push(<Styled.Rectangle />);
    }

    setBarContent(tempBarContent);
  }

  useEffect(() => {
    renderBar();
  }, []);

  return (
    <Styled.Container>
      {barContent?.map((rectangle) => rectangle)}
    </Styled.Container>
  );
};

export default ProgressBar;
