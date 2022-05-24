import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Redirect = ({ children, href }: LinkProps) => {
  const router: any = useHistory();

  function redirect() {
    router.push(href);
  }

  if (href.includes("https://" || "http://")) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferredr">
        {children}
      </Link>
    );
  } else {
    return <Link onClick={redirect}>{children}</Link>;
  }
};

export default Redirect;
