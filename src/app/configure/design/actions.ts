"use server";

import { db } from "@/db";
import {
  ShirtColor,
  ShirtFinish,
  ShirtMaterial,
  ShirtSize,
} from "@prisma/client";

export type SaveConfigProps = {
  color: ShirtColor;
  finish: ShirtFinish;
  size: ShirtSize;
  material: ShirtMaterial;
  configId: string;
}

export async function saveConfig({
  color,
  finish,
  size,
  material,
  configId,
}: SaveConfigProps) {
  await db.configuration.update({
    where: {
      id: configId,
    },
    data: {
      color,
      finish,
      size,
      material,
    },
  });
}
