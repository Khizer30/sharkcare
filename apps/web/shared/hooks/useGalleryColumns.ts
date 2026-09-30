"use client";
import { useEffect, useState } from "react";

export function getGalleryColumnCount(viewportWidth: number) {
  if (viewportWidth >= 1280) {
    return 5;
  }
  if (viewportWidth >= 768) {
    return 3;
  }
  return 2;
}

export function useGalleryColumns() {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const update = () => setColumns(getGalleryColumnCount(window.innerWidth));

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}
