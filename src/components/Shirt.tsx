import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ShirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  imgClassName?: string;
  shirtClassName?: string;
}

const Shirt = ({ imgSrc, className, imgClassName, shirtClassName, dark = false, ...props }: ShirtProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden rounded-xl bg-zinc-200/50",
        className
      )}
      {...props}
    >
      <img
        className={cn("pointer-events-none z-50 select-none", shirtClassName)}
        src={dark ? "/shirt-new.png" : "/shirt-new.png"}
        alt="Shirt image"
      />
      <div className={cn("absolute -z-10 inset-28 top-30", imgClassName)}>
        <img
          className='object-cover min-w-full min-h-full rounded-xl'
          src={imgSrc}
          alt="Overlaying shirt image"
        />
      </div>
    </div>
  );
};

export default Shirt;
