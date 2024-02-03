import React from 'react'
import clsx from 'clsx';
import { buttonVariants } from './button.type'

interface buttonProps{
  children: React.ReactNode;
  variant:buttonVariants
  className: string
}

const Button = ({children, variant, className}: buttonProps) => {
  let buttonStyle = "px-[12px] py-[10px]"
  switch (variant) {
    case buttonVariants.DEFAULT:
      buttonStyle = clsx("rounded-full ", className)
      break;
  
    default:
      break;
  }
  return (
    <button>{children}</button>
  )
}

export default Button
