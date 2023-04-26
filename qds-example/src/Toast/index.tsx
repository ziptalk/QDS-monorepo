import { ComponentProps, Dispatch, SetStateAction, useEffect } from "react";
import PC from "./PC";
import Mobile from "./Mobile";
import useTimeout from "./useTimeout";

interface Props extends ComponentProps<"div"> {
  device: "pc" | "mobile";
  messages: Array<React.ReactNode>;
  setMessages: Dispatch<SetStateAction<Array<React.ReactNode>>>;
}

const DEVICES = [PC, Mobile] as const;

const Toast = ({ device, messages, setMessages, ...props }: Props) => {
  const Message = DEVICES[device === "pc" ? 0 : 1];
  const removeItem = (idx: number) => {
    const newMessages = messages.filter((m, mdx) => mdx !== idx);
    setMessages(newMessages);
  };

  return <Message messages={messages} removeItem={removeItem} {...props} />;
};

export default Toast;
