import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
   <>
      {children}
   </>
  )
};

export default Layout;
