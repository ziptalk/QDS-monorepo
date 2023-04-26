/** @jsxImportSource @emotion/react */

import FixedBackground, {
  modalBackgroundStyle,
  backgroundClose,
  backgroundOpen,
} from "../Common/FixedBackground";
import { css, keyframes, SerializedStyles } from "@emotion/react";
import ReactPortal from "../Common/Portal";
import { useOutsideClose } from "../Common/useOutsideClose";
import React, { useRef, useCallback, useState, useEffect } from "react";
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
  const [animations, setAnimations] = useState({
    background: backgroundOpen,
    modal: modalOpen,
  });
  const ref = useRef<HTMLDivElement>(null);

  const onCloseSheet = useCallback(() => {
    setAnimations({ background: backgroundClose, modal: modalClose });
    setTimeout(() => {
      onClose();
    }, 200);
  }, []);

  useOutsideClose(ref, onCloseSheet);

  useEffect(() => {
    if (!isOpen)
      setAnimations({ background: backgroundOpen, modal: modalOpen });
  }, [isOpen]);

  return isOpen ? (
    <ReactPortal wrapperId="react-portal-modal-container">
      <FixedBackground
        css={css`
          ${modalBackgroundStyle};
          animation: ${animations.background} 0.2s ease-in-out;
          ${overlayStyle ? overlayStyle : ""};
        `}
      >
        <div css={modalBox} ref={ref} {...props}>
          {xButton ? (
            <span
              css={css`
                ${buttonWrapper};
                animation: ${animations.modal} 0.2s ease-in-out;
              `}
            >
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

const modalOpen = keyframes`
    from{
        transform:scale(0);
    }
    to{
        transform:scale(1);
    }
`;

const modalClose = keyframes`
  from{
      transform:scale(1);
  }
  to{
      transform:scale(0);
  } 
`;

const modalBox = css`
  border-radius: 10px;
  background-color: white;
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
