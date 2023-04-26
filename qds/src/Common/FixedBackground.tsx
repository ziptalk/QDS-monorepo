/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";

interface Props extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

/**
 * Modal, BottomSheet - Background Component
 * Auto Close by outside touching
 */
const FixedBackground = ({ children, ...props }: Props) => {
  const [vh, setVh] = useState(0);

  const mobileScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    setVh(vh);
  };

  useEffect(() => {
    mobileScreenSize();
    window.addEventListener("resize", () => mobileScreenSize());
    return () => {
      window.removeEventListener("resize", mobileScreenSize);
    };
  }, []);

  const backgroundStyle = css`
    width: 100vw;
    height: calc(${vh}px * 100);
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;

  return (
    <div css={backgroundStyle} {...props}>
      {children}
    </div>
  );
};

export const modalBackgroundStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const sheetBackgroundStyle = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const backgroundOpen = keyframes`
    from{
      opacity:0;
    }
    to{
      opacity:1;
    }
`;

export const backgroundClose = keyframes`
  from{
    opacity:1;
  }
  to{
    opacity:0;
  } 
`;

export default FixedBackground;
