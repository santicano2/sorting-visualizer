"use client";

import { useContext } from "react";
import { createContext, useState } from "react";

import { SortingAlhorithmType } from "@/lib/types";
import { MAX_ANIMATION_SPEED } from "@/lib/utils";

interface SortingAlhorithmContextType {
  arrayToSort: number[];
  setArrayToSort: (array: number[]) => void;
  selectedAlgorithm: SortingAlhorithmType;
  setSelectedAlgorithm: (algorithm: SortingAlhorithmType) => void;
  isSorting: boolean;
  setIsSorting: (isSorting: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  isAnimationComplete: boolean;
  setIsAnimationComplete: (isComplete: boolean) => void;
  resetArrayAndAnimation: () => void;
  runAnimation: () => void;
}

const SortingAlhorithmContext = createContext<
  SortingAlhorithmContextType | undefined
>(undefined);

export const SortingAlhorithmProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([100, 300, 250, 75]);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<SortingAlhorithmType>("bubble");
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [animationSpeed, setAnimationSpeed] =
    useState<number>(MAX_ANIMATION_SPEED);
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  const resetArrayAndAnimation = () => {};

  const runAnimation = () => {};

  const value = {
    arrayToSort,
    setArrayToSort,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    setIsSorting,
    animationSpeed,
    setAnimationSpeed,
    isAnimationComplete,
    setIsAnimationComplete,
    resetArrayAndAnimation,
    runAnimation,
  };

  return (
    <SortingAlhorithmContext.Provider value={value}>
      {children}
    </SortingAlhorithmContext.Provider>
  );
};

export const useSortingAlhorithm = () => {
  const context = useContext(SortingAlhorithmContext);
  if (context === undefined) {
    throw new Error(
      "useSortingAlhorithm must be used within a SortingAlhorithmProvider"
    );
  }
  return context;
};
