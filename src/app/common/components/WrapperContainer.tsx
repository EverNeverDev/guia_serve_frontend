import { PropsWithChildren } from "react";

const WrapperContainer = ({ children }: PropsWithChildren) => {
  return <div className="max-w-screen-xl m-auto  min-h-full ">{children}</div>;
};

export default WrapperContainer;
