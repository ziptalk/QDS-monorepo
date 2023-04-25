/** @jsxImportSource @emotion/react */

import FixedBackground, {
  sheetBackgroundStyle,
  sheetBackgroundOpen,
  sheetBackgroundClose,
} from "../Common/FixedBackground";
import { css, keyframes, SerializedStyles } from "@emotion/react";
import ReactPortal from "../Common/Portal";
import { useOutsideClose } from "../Common/useOutsideClose";
import { useCallback, useEffect, useRef, useState } from "react";
import Xbutton from "../Common/Xbutton";

interface Props extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  isOpen: boolean;
  ratio: number;
  onClose: () => void;
  xButton?: boolean;
  overlayStyle?: SerializedStyles;
}

/**
 * React Modal Component by Portal
 * @param children Inner Content (innevitable)
 * @param isOpen Is the modal open (innevitable)
 * @param ratio The height of Sheet _  (innevitable)
 * @param onClose Event handler when closing modal (innevitable)
 * @param xButton Existence of the x-button
 * @param overlayStyle Custom Style with Modal Background
 * @returns
 */
const BottomSheet = ({
  children,
  isOpen,
  ratio,
  onClose,
  xButton,
  overlayStyle,
  ...props
}: Props) => {
  const [animations, setAnimations] = useState({
    background: sheetBackgroundOpen,
    sheet: sheetOpen,
  });
  const ref = useRef<HTMLDivElement>(null);

  const onCloseSheet = useCallback(() => {
    setAnimations({ background: sheetBackgroundClose, sheet: sheetClose });
    setTimeout(() => {
      onClose();
    }, 200);
  }, []);

  useOutsideClose(ref, onCloseSheet);

  useEffect(() => {
    if (!isOpen)
      setAnimations({ background: sheetBackgroundOpen, sheet: sheetOpen });
  }, [isOpen]);

  return isOpen ? (
    <ReactPortal wrapperId="react-portal-bottom-sheet-container">
      <FixedBackground
        css={css`
          ${sheetBackgroundStyle};
          animation: ${animations.background} 0.3s ease-in-out;
          ${overlayStyle ? overlayStyle : ""};
        `}
      >
        <div
          css={css`
            ${sheetBox};
            height: ${ratio}vh;
            animation: ${animations.sheet} 0.3s ease-in-out;
          `}
          ref={ref}
          {...props}
        >
          {xButton ? (
            <span css={buttonWrapper}>
              <Xbutton onClick={() => onCloseSheet()} />
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

const sheetOpen = keyframes`
      from{
          bottom: -50px;
          opacity: 0;
      }
      to{
          bottom: 0px;
          opacity: 1;
      }
  `;

const sheetClose = keyframes`
      from{
          bottom: 0px;
          opacity: 1;
      }
      to{
          bottom: -50px;
          opacity: 0;
      }
  `;

const sheetBox = css`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
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

export default BottomSheet;
