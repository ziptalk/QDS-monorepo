import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import { SerializedStyles } from '@emotion/react';

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
declare const Modal: ({ children, isOpen, onClose, xButton, overlayStyle, ...props }: Props) => _emotion_react_jsx_runtime.JSX.Element;

export { Modal };
