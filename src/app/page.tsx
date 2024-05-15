/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Reviews } from "@/components/Reviews";
import Shirt from "@/components/Shirt";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/components/ui/button";
import { CardStack } from "@/components/ui/card-stack";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

const CARDS = [
  {
    id: 0,
    name: "Jonathan",
    designation: "Verified Purchase",
    content: (
      <div className="flex flex-auto gap-2 flex-col lg:pr-8 xl:pr-20">
        <div className="flex gap-0.5">
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
        </div>
        <div className="text-sm leading-8">
          <p>
            "The shirt looks amazing even after almost two years of wearing it.
            The image is clear and{" "}
            <span className="p-0.5 bg-slate-800 text-white">
              not a single scratch
            </span>
            !"
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    name: "Matt",
    designation: "Verified Purchase",
    content: (
      <div className="flex flex-auto gap-2 flex-col lg:pr-8 xl:pr-20">
        <div className="flex gap-0.5">
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
        </div>
        <div className="text-sm leading-8">
          <p>
            "I was at first sceptical about this app, but I decided to give it a
            try. And it was so worth it.{" "}
            <span className="p-0.5 bg-slate-800 text-white">Amazing work!</span>{" "}
            "
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Antonio",
    designation: "Verified Purchase",
    content: (
      <div className="flex flex-auto gap-2 flex-col lg:pr-8 xl:pr-20">
        <div className="flex gap-0.5">
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
          <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
        </div>
        <div className="text-sm leading-8">
          <p>
            "The shirt looks amazing even after almost two years of wearing it.
            The image is clear and{" "}
            <span className="p-0.5 bg-slate-800 text-white">
              not a single scratch!
            </span>{" "}
          </p>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-24 sm:pb-32 lg:pb-52">
          <div className="flex flex-col items-center justify-center">
            <img src="/logo-1.png" className="w-32 lg:w-56 rotate-12" />
            <div className="text-center flex flex-col items-center">
              <h1 className="relative w-fit tracking-tight text-balance font-bold !leading-tight text-gray-900 text-3xl md:text-5xl lg:text-6xl">
                Your image on a{" "}
                <span className="text-orange-600 px-2">Custom</span> T-Shirt!
              </h1>
              <p className="mt-2 text-lg w-full px-4 md:px-24 text-center text-balance md:text-wrap">
                Capture your favorite moments with{" "}
                <span className="font-semibold text-orange-600">
                  your own t-shirt
                </span>
                , and let us present your memories to others.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-col-reverse justify-center mt-24 gap-12">
            <div className="col-span-2 flex flex-col justify-center items-center gap-8">
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
              <div className="flex flex-row gap-2">
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
            <div className="col-span-2 items-center justify-center">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Make your idea come true!
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    You can go to the configurator even without creating an
                    accout.
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4 flex items-center justify-center"
                  >
                    <Shirt
                      className="w-64"
                      imgSrc="/testimonials/1.jpg"
                      imgClassName="inset-20"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-2">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <Link
                        href="/configure/upload"
                        className={buttonVariants({
                          size: "sm",
                          className: "bg-zinc-800",
                        })}
                      >
                        Try now
                        <ArrowRight className=" ml-2-4 h-4 text-white" />
                      </Link>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-bold"
                    >
                      <Link
                        href="/api/auth/register"
                        className={buttonVariants({
                          size: "sm",
                          className: "hover:bg-zinc-800",
                        })}
                      >
                        Sign in
                        <ArrowRight className=" ml-2-4 h-4 text-white" />
                      </Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                What our{" "}
                <span className="relative px-2">
                  customers{" "}
                  <Icons.underline className="hidden xl:block pointer-events-none absolute inset-x-0 -bottom-7 text-orange-500" />
                </span>{" "}
                say?
              </h2>
              <img src="/logo-2.png" className="w-40 order-0 lg:order-2" />
            </div>
            <div className="mx-auto max-w-2xl px-4 lg:mx-0 mt-6 lg:mt-12 lg:max-w-none">
              <CardStack items={CARDS} />
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-32">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-4xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get your{" "}
                <span className="relative px-2 bg-orange-600 text-white">
                  own shirt
                </span>{" "}
                now!
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            
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
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your shirt now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
