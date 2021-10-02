import React from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import P from "../Paragraph/Paragraph";
import { IColor } from "./IColor";
import styles from "./Color.module.css";

const Color: FC<IColor.IProps> = ({
  name,
  active,
  filterProductByColor,
}): ReactElement => {
  const pColor = active ? "accent" : "dark";

  return (
    <div className={styles["color-parent"]}>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="mr-2"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          filterProductByColor(e.currentTarget.id);
        }}
        checked={active}
        data-testid="checkbox"
      />
      <label htmlFor={name} className={styles["color-label"]}>
        <P fontColor={pColor} fontSize="sm" fontWeight="normal">
          {name}
        </P>
        <div
          className={styles["color-bullet"]}
          style={{ backgroundColor: `${name}` }}
        ></div>
      </label>
    </div>
  );
};

export default Color;
