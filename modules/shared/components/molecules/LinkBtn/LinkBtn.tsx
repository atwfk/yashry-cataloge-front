import React from "react";
import type { FC, ReactElement } from "react";
import Link from "next/link";
import P from "../../atoms/Paragraph/Paragraph";
import { ILinkBtn } from "./ILinkBtn";

const LinkBtn: FC<ILinkBtn.IProps> = ({
  path,
  children,
  active,
  linkId,
}): ReactElement => {
  return (
    <Link href={path}>
      <a id={linkId}>
        <P
          fontColor={active ? "accent" : "dark"}
          fontSize="md"
          fontWeight="normal"
        >
          {children}
        </P>
      </a>
    </Link>
  );
};

export default LinkBtn;
