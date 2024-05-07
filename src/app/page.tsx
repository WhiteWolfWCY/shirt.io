/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Reviews } from "@/components/Reviews";
import Shirt from "@/components/Shirt";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 
            lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52"
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/logo.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your image on a{" "}
                <span className="bg-orange-600 px-2 text-white">Custom</span>{" "}
                T-Shirt!
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite moments with{" "}
                <span className="font-semibold text-orange-600">
                  your own t-shirt
                </span>
                , and let us present your memories to others.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    High-quality, natural material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    Washable in the laundry
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    Three years print guarantee
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="User image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="User image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="User image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="User image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="User image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 min-h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Shirt className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-7 text-orange-500" />
              </span>{" "}
              say?
            </h2>
            <img src="/logo.png" className="w-40 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The shirt looks amazing even after almost two years of
                  wearing it. The image is clear and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    not a single scratch
                  </span>{" "}
                  on it. I even got a compliment on the look of the shirt!"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I usually pay attention to the materials that the clothes I
                  buy are made of. I was kindly suprised when I got the shirt.
                  From the first moment I felt the quality of it.{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    The graphics are so precise and amazing.
                  </span>{" "}
                  Love it!"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Matt</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get your{" "}
                <span className="relative px-2 bg-orange-600 text-white">own shirt</span>{" "}
                now!
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img src="/arrow.png" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0" />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm
              rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/horse.jpg" className="rounded-md object-cover 
                bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full" />
              </div>

              <Shirt className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
              High quality, light and breathing material
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
              Wash and time resistant print
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
              Two years guarantee
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
              Two days shipping
            </li>

            <div className="flex justify-center">
              <Link className={buttonVariants({
                size: 'lg',
                className: "mx-auto mt-8"
              })} href="/configure/upload">
                Create your shirt now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
