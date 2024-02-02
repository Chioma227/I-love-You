import React from "react";
import clsx from "clsx";
import { containerVariants } from "./container.type";

const Container = ({
  children,
  variant,
  className,
}: {
  children: React.ReactNode;
  variant: containerVariants;
  className?: string;
}) => {
  let containerStyle = "";
  switch (variant) {
    case containerVariants.ROUNDED:
      containerStyle = clsx("rounded-md", className)
      break;
    case containerVariants.FLEXED:
      containerStyle = clsx("flex items-center justify-center", className)
      break;
    case containerVariants.ABSOLUTE:
      containerStyle = clsx("absolute z-10", className)
      break;
    case containerVariants.RELATIVE:
      containerStyle = clsx("relative", className)
      break;
    default:
      break;
  }
  return <main className={clsx(containerStyle, className)}>
    {children}
  </main>;
};

export default Container;
