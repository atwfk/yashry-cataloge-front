declare namespace IDataTests {
  export interface IDataSucccess {
    data: {
      category: string;
    };
  }
  export interface IDataError {
    data: {
      error: boolean;
      message: string;
      errorCode: number;
    };
  }
}

export { IDataTests };
