import { EStatusCode } from "../../../../shared/api/EStatusCode";

export const errorMessage: Record<number, string> = {
  [EStatusCode.NotFound]: "Cannot Find any products",
  [EStatusCode.BadRequest]: "Something went wrong",
};

export const getUrl = (param?: number, queries?: string): string => {
  let url = "?";

  if (param) {
    url += `categoryId=${param}&`;
  }

  if (queries) {
    url += `${queries}`;
  }

  return url;
};
