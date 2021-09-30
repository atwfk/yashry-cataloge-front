import axios from "axios";
import { dataUrl } from "../../../shared/api/axiosConfig";
import { errorMessage, getUrl } from "./helpers/getProductsHelpers";
import { generateErrMsg } from "../../../shared/logic/generateErrMsg/generateErrMsg";
import { IData } from "../../../shared/types/IData";

export const getProducts = async (
  param?: number,
  queries?: string,
): Promise<IData.IProduct[]> => {
  try {
    const { data } = (await axios.get(
      `${dataUrl}/product${getUrl(param, queries)}`,
    )) as {
      data: IData.IProduct[];
    };

    return data;
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
