import React from 'react'
import clsx from 'clsx';
import { buttonVariants } from './button.type'

interface buttonProps{
  children: React.ReactNode;
  variant:buttonVariants
  className: string
}

const Button = ({children, variant, className}: buttonProps) => {
  let buttonStyle = ""
  switch (variant) {
    case buttonVariants.DEFAULT:
      buttonStyle = clsx("", className)
      break;
  
    default:
      break;
  }
  return (
    <div>
      
    </div>
  )
}

export default Button
