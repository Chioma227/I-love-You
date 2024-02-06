import React from "react";
import clsx from "clsx";

const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  className = "text-justify"
  return <div className={clsx(className)}>{children}</div>;
};

export default Text;
