import React from "react";
import type { FC, ReactElement } from "react";
import styles from "./Box.module.css";

const Box: FC = ({ children }): ReactElement => (
  <div className={styles.box}>{children}</div>
);

export default Box;
