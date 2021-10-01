import React from "react";
import type { FC, ReactElement } from "react";
import type { IData } from "../../../../shared/types/IData";
import Image from "next/image";
import Box from "../../atoms/Box/Box";
import P from "../../atoms/Paragraph/Paragraph";
import Stars from "../../atoms/Stars/Stars";

const Product: FC<IData.IProduct> = ({
  price,
  rating,
  id,
  name,
  image,
  currency,
}): ReactElement => {
  return (
    <Box>
      <>
        <div className="w-full">
          <Image
            src={image}
            alt="product"
            layout="responsive"
            objectFit="cover"
            width={300}
            height={300}
            id={`${id}`}
          />
        </div>
        <P fontColor="dark" fontSize="md" fontWeight="medium">
          {name}
        </P>
        <Stars rating={rating} />
        <P fontColor="accent" fontSize="sm" fontWeight="normal">
          <span className="mr-1">{currency}</span>
          <span>${price}</span>
        </P>
      </>
    </Box>
  );
};

export default Product;
