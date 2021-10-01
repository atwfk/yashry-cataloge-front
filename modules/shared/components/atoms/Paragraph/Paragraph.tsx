import React from "react";
import type { FC, ReactElement } from "react";
import classNames from "classnames";
import type { IParagraph } from "./IParagraph";

const P: FC<IParagraph.IProps> = ({
  children,
  classes,
  fontSize,
  fontColor,
  fontWeight,
}): ReactElement => {
  const pClasses = classNames(
    {
      "text-xs": fontSize === "xs",
      "text-sm": fontSize === "sm",
      "text-base": fontSize === "md",
      "text-lg": fontSize === "lg",
      "text-xl": fontSize === "xl",
    },
    {
      "text-accent": fontColor === "accent",
      "text-primary": fontColor === "primary",
      "text-success": fontColor === "success",
      "text-error": fontColor === "error",
      "text-dark": fontColor === "dark",
    },
    {
      "font-normal": fontWeight === "normal",
      "font-medium": fontWeight === "medium",
      "font-bold": fontWeight === "bold",
    },
    classes,
  );

  return <p className={pClasses}>{children}</p>;
};

export default P;
