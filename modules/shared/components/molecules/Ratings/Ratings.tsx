import React from "react";
import type { FC, ReactElement } from "react";
import Rating from "../../atoms/Rating/Rating";
import { IRatings } from "./IRatings";

const Colors: FC<IRatings.IProps> = ({
  ratings,
  filterProductByRating,
}): ReactElement => {
  return (
    <div>
      {ratings.map((rate) => (
        <Rating
          key={rate.id}
          active={rate.active}
          rating={rate.rating}
          filterProductByRating={filterProductByRating}
        />
      ))}
    </div>
  );
};

export default Colors;
