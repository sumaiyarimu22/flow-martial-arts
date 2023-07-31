import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "flex justify-center duration-300 style-text font-medium",
  {
    variants: {
      color: {
        primary: "text-text border border-white hover:text-accent",

        danger:
          "bg-accent text-text hover:bg-black border border-accent duration-300",
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
