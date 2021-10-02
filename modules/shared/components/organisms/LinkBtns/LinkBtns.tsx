import React from "react";
import type { FC, ReactElement } from "react";
import { ILinkBtns } from "./ILinkBtns";
import LinkBtn from "../../molecules/LinkBtn/LinkBtn";

const LinkBtns: FC<ILinkBtns.IProps> = ({ links }): ReactElement => {
  return (
    <div className="flex">
      {links.map((link) => (
        <div key={link.linkId} className="mr-2 last:mr-0" data-testid="link">
          <LinkBtn linkId={link.linkId} path={link.path} active={link.active}>
            {link.name}
          </LinkBtn>
        </div>
      ))}
    </div>
  );
};

export default LinkBtns;
