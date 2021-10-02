import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { IData } from "@modules/shared/types/IData";
import Products from "@modules/shared/components/organisms/Products/Products";
import ColorFilter from "@modules/shared/components/organisms/ColorFilter/ColorFilter";
import RatingFilter from "@modules/shared/components/organisms/RatingFilter/RatingFilter";

const ProductFilters: FC<IData.IProps> = ({ data }): ReactElement => {
  const [products, setProducts] = useState(data.products);
  const [colors, setColors] = useState(data.colors);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [ratings, setRatings] = useState(data.ratings);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  // const [prices, setPrices] = useState({
  //   min: data.prices.min,
  //   max: data.prices.max,
  //   from: data.prices.from,
  //   to: data.prices.to,
  // });

  return (
    <div className="flex justify-center p-4">
      <div className="mr-6">
        <div className="sticky h-screen inset-0">
          <div className="mb-3">
            <ColorFilter
              colors={colors}
              setProducts={setProducts}
              setColors={setColors}
              uniqueColors={data.uniqueColors}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              selectedRatings={selectedRatings}
              prices={data.prices}
              setLoading={setLoading}
            />
          </div>
          <div>
            <RatingFilter
              setProducts={setProducts}
              ratings={ratings}
              setRatings={setRatings}
              uniqueRatings={data.uniqueRatings}
              selectedColors={selectedColors}
              selectedRatings={selectedRatings}
              setSelectedRatings={setSelectedRatings}
              prices={data.prices}
              setLoading={setLoading}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Products products={products} loading={loading} />
      </div>
    </div>
  );
};

export default ProductFilters;
