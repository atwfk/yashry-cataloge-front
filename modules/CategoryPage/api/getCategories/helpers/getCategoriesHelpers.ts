import { IData } from "../../../../shared/types/IData";
import { EStatusCode } from "../../../../shared/api/EStatusCode";

export const errorMessage: Record<number, string> = {
  [EStatusCode.NotFound]: "Cannot Find any category",
  [EStatusCode.BadRequest]: "Something went wrong",
};

export const addCategory = (
  categories: IData.ICategory[],
  newCategory: IData.ICategory,
): IData.ICategory[] => {
  const newCategories = [...categories];
  newCategories.unshift({
    id: newCategory.id,
    name: newCategory.name,
    image: newCategory.image,
  });

  return newCategories;
};
