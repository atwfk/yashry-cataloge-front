import React from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import Stars from "../Stars/Stars";
import { IRating } from "./IRating";

const Color: FC<IRating.IProps> = ({
  rating,
  active,
  filterProductByRating,
}): ReactElement => {
  return (
    <div>
      <input
        type="checkbox"
        name={`rate-${rating}`}
        id={`rate-${rating}`}
        className="w-0 h-0 absolute inset-0"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          filterProductByRating(e.currentTarget.id, e.target.checked);
        }}
        checked={active}
        data-testid="rate-checkbox"
      />
      <label htmlFor={`rate-${rating}`} className="cursor-pointer">
        <Stars rating={rating} active={active} />
      </label>
    </div>
  );
};

export default Color;
