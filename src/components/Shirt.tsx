import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ShirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Shirt = ({ imgSrc, className, dark = false, ...props }: ShirtProps) => {
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
        src={dark ? "/shirt.png" : "/shirt.png"}
        alt="Shirt image"
      />
      <div className="absolute -z-10 inset-3 top-10">
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
