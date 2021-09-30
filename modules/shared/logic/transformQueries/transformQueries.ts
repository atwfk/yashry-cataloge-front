import { ITransformQueries } from "./ITransformQueries";

export const transformQueries = (
  queries: ITransformQueries.IQueries,
): string => {
  let queryString = "";
  const { color, rating } = queries;

  if (color) {
    if (Array.isArray(color)) {
      color.forEach((co) => {
        queryString += `color=${co}&`;
      });
    } else {
      queryString += `color=${color}&`;
    }
  }

  if (rating) {
    if (Array.isArray(rating)) {
      rating.forEach((rate) => {
        queryString += `rating=${rate}&`;
      });
    } else {
      queryString += `rating=${rating}&`;
    }
  }

  if (queryString.includes("&", -1)) {
    return queryString.slice(0, -1);
  }

  return queryString;
};
