import { css } from "@emotion/react";

const Xbutton = ({ ...props }: React.ComponentProps<"button">) => {
  return <button css={buttonStyle} {...props} />;
};

const buttonStyle = css`
  overflow: hidden;
  position: relative;
  border: none;
  padding: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: transparent;
  color: #6a6a6a;
  font: inherit;
  text-indent: 100%;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: rgba(119, 119, 119, 0.1);
  }

  &:before,
  &:after {
    position: absolute;
    top: 15%;
    left: calc(50% - 0.0625em);
    width: 0.125em;
    height: 70%;
    border-radius: 0.125em;
    transform: rotate(45deg);
    background: currentcolor;
    content: "";
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export default Xbutton;
