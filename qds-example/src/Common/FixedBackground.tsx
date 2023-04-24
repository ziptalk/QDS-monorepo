/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";

interface Props extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

/**
 * Modal, BottomSheet - Background Component
 * Auto Close by outside touching
 */
const FixedBackground = ({ children, ...props }: Props) => {
  return (
    <div css={backgroundStyle} {...props}>
      {children}
    </div>
  );
};

const backgroundStyle = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #0000005a;
`;

export const modalBackgroundStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const modalBackgroundAnimation = keyframes`
    from{
      opacity:0;
    }
    to{
      opacity:1;
    }
`;

export default FixedBackground;