import type { StaticImageData } from "next/image";
import sosVillage_1 from "./sosVillage_1.webp";
import sosVillage_10 from "./sosVillage_10.webp";
import sosVillage_11 from "./sosVillage_11.webp";
import sosVillage_12 from "./sosVillage_12.webp";
import sosVillage_13 from "./sosVillage_13.webp";
import sosVillage_14 from "./sosVillage_14.webp";
import sosVillage_15 from "./sosVillage_15.webp";
import sosVillage_16 from "./sosVillage_16.webp";
import sosVillage_17 from "./sosVillage_17.webp";
import sosVillage_18 from "./sosVillage_18.webp";
import sosVillage_19 from "./sosVillage_19.webp";
import sosVillage_2 from "./sosVillage_2.webp";
import sosVillage_3 from "./sosVillage_3.webp";
import sosVillage_4 from "./sosVillage_4.webp";
import sosVillage_5 from "./sosVillage_5.webp";
import sosVillage_6 from "./sosVillage_6.webp";
import sosVillage_7 from "./sosVillage_7.webp";
import sosVillage_8 from "./sosVillage_8.webp";
import sosVillage_9 from "./sosVillage_9.webp";

export const sosVillageGalleryImages: StaticImageData[] = [
  sosVillage_1,
  sosVillage_2,
  sosVillage_3,
  sosVillage_4,
  sosVillage_5,
  sosVillage_6,
  sosVillage_7,
  sosVillage_8,
  sosVillage_9,
  sosVillage_10,
  sosVillage_11,
  sosVillage_12,
  sosVillage_13,
  sosVillage_14,
  sosVillage_15,
  sosVillage_16,
  sosVillage_17,
  sosVillage_18,
  sosVillage_19
];

export function chunkGalleryIntoRows(images: StaticImageData[], rowSize = 3) {
  const rows: StaticImageData[][] = [];

  for (let i = 0; i < images.length; i += rowSize) {
    const row = images.slice(i, i + rowSize);
    while (row.length < rowSize) {
      row.push(images[(i + row.length) % images.length]!);
    }
    rows.push(row);
  }

  return rows;
}
