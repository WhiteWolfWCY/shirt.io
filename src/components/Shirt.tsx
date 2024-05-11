import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ShirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  imgClassName?: string;
}

const Shirt = ({ imgSrc, className, imgClassName, dark = false, ...props }: ShirtProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-50 select-none"
        src={dark ? "/shirt-test.png" : "/shirt-test.png"}
        alt="Shirt image"
      />
      <div className={cn("absolute -z-10 inset-5 top-10", imgClassName)}>
        <img
          className='object-cover min-w-full min-h-full'
          src={imgSrc}
          alt="Overlaying shirt image"
        />
      </div>
    </div>
  );
};

export default Shirt;
