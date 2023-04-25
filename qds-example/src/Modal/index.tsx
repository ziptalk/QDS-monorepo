/** @jsxImportSource @emotion/react */

import FixedBackground, {
  modalBackgroundStyle,
  modalBackgroundAnimation,
} from "../Common/FixedBackground";
import { css, keyframes, SerializedStyles } from "@emotion/react";
import ReactPortal from "../Common/Portal";
import { useOutsideClose } from "../Common/useOutsideClose";
import { useRef } from "react";
import Xbutton from "../Common/Xbutton";

interface Props extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  xButton?: boolean;
  overlayStyle?: SerializedStyles;
}

/**
 * React Modal Component by Portal
 * @param children Inner Content (innevitable)
 * @param isOpen Is the modal open (innevitable)
 * @param onClose Event handler when closing modal (innevitable)
 * @param xButton Existence of the x-button
 * @param overlayStyle Custom Style with Modal Background
 * @returns
 */
const Modal = ({
  children,
  isOpen,
  onClose,
  xButton,
  overlayStyle,
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClose(ref, onClose);

  return isOpen ? (
    <ReactPortal wrapperId="react-portal-modal-container">
      <FixedBackground
        css={css`
          ${modalBackgroundStyle};
          animation: ${modalBackgroundAnimation} 0.2s ease-in-out;
          ${overlayStyle ? overlayStyle : ""};
        `}
      >
        <div css={modalBox} ref={ref} {...props}>
          {xButton ? (
            <span css={buttonWrapper}>
              <Xbutton onClick={() => onClose()} />
            </span>
          ) : (
            <></>
          )}
          {children}
        </div>
      </FixedBackground>
    </ReactPortal>
  ) : (
    <></>
  );
};

const modalAnimation = keyframes`
    from{
        transform:scale(0);
    }
    to{
        transform:scale(1);
    }
`;

const modalBox = css`
  border-radius: 10px;
  background-color: white;
  animation: ${modalAnimation} 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  position: relative;
`;

const buttonWrapper = css`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export default Modal;
