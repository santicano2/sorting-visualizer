"use client";

import { useSortingAlhorithm } from "@/context/Visualizer";
import { useEffect } from "react";

export default function Home() {
  const { arrayToSort, isSorting } = useSortingAlhorithm();

  useEffect(() => {
    console.log(arrayToSort);
    console.log(isSorting);
  }, []);

  return <div>hola</div>;
}
