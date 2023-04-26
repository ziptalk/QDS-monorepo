/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";
import useTimeout from "./useTimeout";
import { ComponentProps, useEffect, useState } from "react";

interface Props extends ComponentProps<"div"> {
  children: React.ReactNode;
  gap: number;
  idx: number;
}

const PCToast = ({ children, gap, idx, ...props }: Props) => {
  console.log(`${idx}번째 자식 ${gap}`);
  return (
    <div
      css={css`
        ${toastContainer};
        bottom: ${gap * 80}px;
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const toastOpen = keyframes`
    from{
        top: -80px;
    }
    to{
        top: 0px;
    }
`;

const toastContainer = css`
  height: 70px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  position: absolute;
  animation: ${toastOpen} 0.3s ease-in-out;
  transition: all 3s ease-in-out;
`;

export default PCToast;
