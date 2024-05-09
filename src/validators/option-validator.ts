// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-950",
  },
] as const;

export const SIZES = {
  name: "sizes",
  options: [
    {
      label: "XS",
      value: "xs",
    },
    {
      label: "S",
      value: "s",
    },
    {
      label: "M",
      value: "m",
    },
    {
      label: "L",
      value: "l",
    },
    {
      label: "XL",
      value: "xl",
    },
    {
      label: "XXL",
      value: "xxl",
    },
  ],
} as const;

export const MATERIALS = {
    name: "material",
    options: [
        {
            label: "Polyester",
            value: "polyester",
            description: undefined,
            price: PRODUCT_PRICES.material.polyester
        },
        {
            label: "Cotton",
            value: "cotton",
            description: "An organic, natural cotton",
            price: PRODUCT_PRICES.material.cotton
        },
        {
            label: "Tri-Blend",
            value: "triblend",
            description: "A combination of cotton, polyester and rayon",
            price: PRODUCT_PRICES.material.triblend
        },
    ]
} as const

export const FINISHES = {
    name: "finish",
    options: [
        {
            label: "Smooth Finish",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth
        },
        {
            label: "Textured Finish",
            value: "textured",
            description: "Soft grippy texture",
            price: PRODUCT_PRICES.finish.textured
        },
    ]
} as const
