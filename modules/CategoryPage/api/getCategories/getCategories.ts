import axios from "axios";
import { dataUrl } from "../../../shared/api/axiosConfig";
import { addCategory, errorMessage } from "./helpers/getCategoriesHelpers";
import { generateErrMsg } from "../../../shared/logic/generateErrMsg/generateErrMsg";
import { IData } from "../../../shared/types/IData";

export const getCategories = async (): Promise<IData.ICategory[]> => {
  try {
    const { data } = (await axios.get(`${dataUrl}/category`)) as {
      data: IData.ICategory[];
    };

    const newCategories = addCategory(data, {
      id: 0,
      name: "All",
      image: data[0].image,
    });

    return newCategories;
  } catch (err: unknown) {
    const { response } = err as {
      response: { statusText: string; status: number };
    };
    const { message: errMessage } = err as { message: string };

    if (!response) {
      throw Object.assign(new Error(), {
        error: true,
        message: errMessage,
      });
    }

    const { status, statusText } = response;
    const generatedMessage = generateErrMsg(errorMessage, status, statusText);

    throw Object.assign(new Error(), {
      error: true,
      message: generatedMessage,
      errorCode: status,
    });
  }
};
