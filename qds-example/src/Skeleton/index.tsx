/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";
import { ComponentProps } from "react";

const Skeleton = ({ ...props }: ComponentProps<"div">) => {
  return <div css={skeletonUi} {...props} />;
};

const shine = keyframes`
    to {
        background-position-x: -200%;
    }
`;

const skeletonUi = css`
  background: #eee;
  background: linear-gradient(1000deg, #ececec 5%, #f5f5f5 18%, #ececec 53%);
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;

export default Skeleton;
