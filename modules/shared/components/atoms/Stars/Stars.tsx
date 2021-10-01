import React from "react";
import Image from "next/image";
import type { FC, ReactElement } from "react";

const Stars: FC<{ rating: number }> = ({ rating }): ReactElement => {
  const stars = Array.from(Array(5).keys());
  return (
    <div className="flex">
      {stars.map((star) => {
        if (star < rating) {
          return (
            <div className="w-8" key={star}>
              <Image
                src="https://img.icons8.com/emoji/36/000000/star-emoji.png"
                alt="star"
                layout="responsive"
                width={36}
                height={36}
                id={`${star}`}
                data-testid="filled-stars"
              />
            </div>
          );
        }
        return (
          <div className="w-8" key={star}>
            <Image
              src="https://img.icons8.com/color/36/000000/star--v1.png"
              alt="star"
              layout="responsive"
              width={36}
              height={36}
              id={`${star}`}
              data-testid="not-filled-stars"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stars;
