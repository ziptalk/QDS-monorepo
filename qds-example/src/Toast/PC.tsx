/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Props } from "./common";
import PCToast from "./PCToast";

const PC = ({ messages, removeItem, ...props }: Props) => {
  return (
    <div css={pcWrapper} {...props}>
      {messages.map((msg, idx) => (
        <PCToast
          key={`${idx}-key`}
          gap={messages.length - idx - 1}
          idx={idx}
          onClick={() => removeItem(idx)}
        >
          {msg}
        </PCToast>
      ))}
    </div>
  );
};

const pcWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 10px;
  position: fixed;
  top: 0px;
  right: 0px;
  transition: all 0.2s;
`;

export default PC;
