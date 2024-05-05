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
        <img className="pointer-events-none z-50 select-none" src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"} alt="Shirt image" />
        <div className="absolute -z-10 inset-0">
            <img className="object-cover" src={imgSrc} alt="Overlaying shirt image" />
        </div>
    </div>
  );
};

export default Shirt;
