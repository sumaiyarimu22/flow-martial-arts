import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "flex justify-center border border-white hover:text-accent duration-300",
  {
    variants: {
      color: {
        primary: "text-text",
        // secondary:
        //   "text-gray-400 hover:bg-gray-200 hover:text-gray-600  border border-white",
        // danger: "bg-rose-500 text-white hover:bg-rose-600",
      },
      size: {
        default: "py-2 px-4 w-40",
        full: "py-3 w-full",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);

const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVariants({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
