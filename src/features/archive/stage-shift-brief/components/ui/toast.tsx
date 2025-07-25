import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
}

export interface ToastActionElement {
  altText: string
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
          {
            "border-border bg-background text-foreground": variant === "default",
            "destructive border-destructive/50 bg-destructive text-destructive-foreground": variant === "destructive",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Toast.displayName = "Toast"

const ToastAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & {
    altText: string
  }
>(({ className, altText, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = "ToastAction"

const ToastClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className
    )}
    toast-close=""
    {...props}
  />
))
ToastClose.displayName = "ToastClose"

const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = "ToastDescription"

type ToastActionProps = React.ComponentPropsWithoutRef<typeof ToastAction>

export {
  type ToastActionProps,
  Toast,
  ToastAction,
  ToastClose,
  ToastTitle,
  ToastDescription,
} 