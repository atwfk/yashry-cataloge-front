declare namespace ILinkBtns {
  export interface IProps {
    links: ILinkData[];
  }

  interface ILinkData {
    linkId: string;
    active: boolean;
    path: string;
    name: string;
  }
}

export { ILinkBtns };
