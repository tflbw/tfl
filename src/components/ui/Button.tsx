import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-tfl-red text-white hover:bg-tfl-red/90",
      secondary: "bg-tfl-blue text-white hover:bg-tfl-blue/90",
      outline: "border border-tfl-blue text-tfl-blue bg-background hover:bg-tfl-blue hover:text-white",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`

    return (
      <Comp
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
