import React, { useEffect, useState } from "react";
import type { FC, ReactElement, FocusEvent, ChangeEvent } from "react";
import { IPriceInput } from "./IPriceInput";
import P from "../Paragraph/Paragraph";

const PriceInput: FC<IPriceInput.IProps> = ({
  minPrice,
  maxPrice,
  from,
  to,
  updateMinPrice,
  updateMaxPrice,
}): ReactElement => {
  const [minPriceVal, setMinPriceVal] = useState<number | undefined>(undefined);
  const [maxPriceVal, setMaxPriceVal] = useState<number | undefined>(undefined);

  useEffect(() => {
    setMinPriceVal(from);
  }, [from]);

  useEffect(() => {
    setMaxPriceVal(to);
  }, [to]);

  return (
    <div className="flex flex-col">
      <P fontColor="dark" fontSize="md" fontWeight="medium" classes="mb-2">
        Prices: ${minPrice} - ${maxPrice}
      </P>
      <div>
        <input
          type="number"
          name="min-price"
          id="minPrice"
          value={minPriceVal ?? 0}
          className="border-2 border-dark-grey rounded-md w-16 mr-2"
          onBlur={(e: FocusEvent<HTMLInputElement>): void => {
            updateMinPrice(e.currentTarget.value);
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setMinPriceVal(+e.currentTarget.value);
          }}
          data-testid="min-price"
        />
        <input
          type="number"
          name="max-price"
          id="maxPrice"
          value={maxPriceVal ?? 0}
          className="border-2 border-dark-grey rounded-md w-16"
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            updateMaxPrice(e.currentTarget.value);
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setMaxPriceVal(+e.currentTarget.value);
          }}
          data-testid="max-price"
        />
      </div>
    </div>
  );
};

export default PriceInput;
