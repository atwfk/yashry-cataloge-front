declare namespace IParagraph {
  export interface IProps {
    fontSize: "xs" | "sm" | "md" | "lg" | "xl";
    fontColor: "accent" | "primary" | "success" | "error" | "dark";
    fontWeight: "normal" | "medium" | "bold";
    classes?: string;
  }
}

export { IParagraph };
