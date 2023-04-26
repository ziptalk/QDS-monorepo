import { ComponentProps } from "react";

export interface Props extends ComponentProps<"div"> {
  messages: Array<React.ReactNode>;
  removeItem: (idx: number) => void;
}
