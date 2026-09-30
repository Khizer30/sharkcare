"use client";
import { chunkGalleryIntoRows, sosVillageGalleryImages } from "@shared/assets/sosVillage/galleryImages";
import { useGalleryColumns } from "@shared/hooks/useGalleryColumns";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const VISIBLE_ROWS = 2;
const ROW_GAP_PX = 20;

function galleryImageSizes(columns: number) {
  const share = Math.round(100 / columns);
  if (columns >= 5) {
    return `(max-width: 767px) 50vw, (max-width: 1279px) 33vw, ${share}vw`;
  }
  if (columns >= 3) {
    return `(max-width: 767px) 50vw, ${share}vw`;
  }
  return "50vw";
}

function GalleryRow({ images, rowKey, columns }: { images: StaticImageData[]; rowKey: string; columns: number }) {
  return (
    <div className="sc-gallery-row grid w-full shrink-0 gap-5" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
      {images.map((src, index) => (
        <div key={`${rowKey}-${index}`} className="sc-photo sc-image-hover relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
          <Image
            src={src}
            alt={`SharkCare visit at SOS Village, photo ${index + 1}`}
            fill
            draggable={false}
            className="object-cover"
            sizes={galleryImageSizes(columns)}
          />
        </div>
      ))}
    </div>
  );
}

export function GallerySection() {
  const columns = useGalleryColumns();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState<number>();

  const rows = useMemo(() => chunkGalleryIntoRows(sosVillageGalleryImages, columns), [columns]);
  const loopRows = useMemo(() => [...rows, ...rows], [rows]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const measure = () => {
      const row = viewport.querySelector<HTMLElement>(".sc-gallery-row");
      if (!row) {
        return;
      }
      const rowHeight = row.getBoundingClientRect().height;
      setViewportHeight(Math.ceil(rowHeight * VISIBLE_ROWS + ROW_GAP_PX));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, [columns, loopRows.length]);

  return (
    <section id="gallery" className="w-full bg-[#FAFAF7]">
      <div className="w-full px-[clamp(20px,5vw,56px)] py-[clamp(72px,9vw,112px)]">
        <div className="mb-[clamp(36px,5vw,56px)] flex max-w-[560px] flex-col gap-3">
          <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#1F8707]">On The Ground</span>
          <h2 className="font-heading text-[clamp(28px,3.4vw,38px)] leading-[1.2] font-medium text-[#000B3D]">A visit to SOS Village</h2>
          <p className="text-base leading-relaxed text-[#565B6B]">
            Spending Independence Day with the children, one small part of showing up where it matters.
          </p>
        </div>

        <div
          ref={viewportRef}
          className="sc-gallery-viewport relative w-full max-w-none overflow-hidden"
          style={viewportHeight !== undefined ? { height: viewportHeight } : undefined}
        >
          <div key={columns} className="sc-gallery-rows-track flex w-full flex-col gap-5">
            {loopRows.map((row, index) => (
              <GalleryRow key={`row-${columns}-${index}`} rowKey={`row-${columns}-${index}`} images={row} columns={columns} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
