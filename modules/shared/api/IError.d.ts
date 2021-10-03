declare namespace IError {
  export interface IErrorData {
    message: string;
    error: boolean;
    errorCode: number;
  }

  export interface IErrorResponse {
    response: { statusText: string; status: number };
  }
}

export { IError };
