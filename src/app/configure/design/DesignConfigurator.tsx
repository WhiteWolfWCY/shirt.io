"use client"

import HandleComponent from "@/components/HandleComponent";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { Rnd } from "react-rnd";

interface DesignConfiguratorProps {
  configId: string;
  imgUrl: string;
  imageDimensions: { width: number; height: number };
}

const DesignConfigurator = ({
  configId,
  imgUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  return (
    <div className="relative mt-20 grid grid-cols-3 mb-20 pb-20">
      <div
        className="relative h-[37.5rem] overflow-hidden col-span-2 w-full 
      max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <div className="relative w-9/12 bg-opacity-50 pointer-events-none aspect-[1635/1831]">
          <AspectRatio
            ratio={1635 / 1831}
            className="pointer-events-none relative z-50 aspect-[1635/1831] w-full"
          >
            <NextImage
              fill
              alt="Shirt image"
              src="/shirt-test.png"
              className="pointer-events-none z-50 select-none"
            />
          </AspectRatio>

          <div className="absolute z-40 inset-0 left-[3px] top-px r-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px r-[3px] bottom-px rounded-[32px]",
              `bg-zinc-950`
            )}
          />
        </div>

        <Rnd default={{
          x: 150,
          y: 205,
          height:imageDimensions.height / 3,
          width: imageDimensions.width / 3,
        }}
        className="absolute z-30 border-[3px] border-primary"
        lockAspectRatio
        resizeHandleComponent={{
          bottomRight: <HandleComponent />,
          bottomLeft: <HandleComponent />,
          topLeft: <HandleComponent />,
          topRight: <HandleComponent />,
        }}>
          <div className="relative w-full h-full">
            <NextImage
              src={imgUrl}
              fill
              alt="Your image"
              className="pointer-events-none"
            />
          </div>
        </Rnd>
      </div>
    </div>
  );
};

export default DesignConfigurator;
