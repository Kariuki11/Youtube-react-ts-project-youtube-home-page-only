import { cva } from "class-variance-authority"
const buttonStyles = cva([ "transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"]
        },
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full",
                "w-10", "h-10",
                "flex",
                "items-center",
                "justify-center",
                "p-2.5",
            ],
        }
    }
})

// const classes = buttonStyles({ size: "icon" })

export function Button({ variant, size }: ButtonProps) {
    return <Button className={buttonStyles({ variant, size })} />
}