import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import { SerializedStyles } from '@emotion/react';
import React, { ComponentProps } from 'react';

interface Props$1 extends React.ComponentProps<"div"> {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    xButton?: boolean;
    overlayStyle?: SerializedStyles;
    xStyle?: SerializedStyles;
}
/**
 * React Modal Component by Portal
 * @param children Inner Content (innevitable)
 * @param isOpen Is the modal open (innevitable)
 * @param onClose Event handler when closing modal (innevitable)
 * @param xButton Existence of the x-button
 * @param overlayStyle Custom Style with Modal Background
 * @param xStyle Custom Style with x-button
 * @returns
 */
declare const Modal: ({ children, isOpen, onClose, xButton, overlayStyle, xStyle, ...props }: Props$1) => _emotion_react_jsx_runtime.JSX.Element;

interface Props extends React.ComponentProps<"div"> {
    children: React.ReactNode;
    isOpen: boolean;
    ratio: number;
    onClose: () => void;
    xButton?: boolean;
    overlayStyle?: SerializedStyles;
}
declare const BottomSheet: ({ children, isOpen, ratio, onClose, xButton, overlayStyle, ...props }: Props) => _emotion_react_jsx_runtime.JSX.Element;

/**
 * Skeleton UI
 */
declare const Skeleton: ({ ...props }: ComponentProps<"div">) => _emotion_react_jsx_runtime.JSX.Element;

export { BottomSheet, Modal, Skeleton };
