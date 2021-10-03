import React from "react";
import type { ReactElement, FC } from "react";
import type { IWithErrorHandler } from "./IwithErrorHandler";

// eslint-disable-next-line comma-spacing
const withErrorHandler = <T,>(WrappedComponent: FC<T>): FC<T> => {
  const C = (props: IWithErrorHandler.IProps & T): ReactElement => {
    const { data } = props;
    if (data?.error) {
      return <div className="flex justify-center">{data?.message}</div>;
    }
    return <WrappedComponent {...props} />;
  };

  return C;
};

export default withErrorHandler;
