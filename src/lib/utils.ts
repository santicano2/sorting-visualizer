import { generateBubbleSortArrayAnimation } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlhorithmType } from "./types";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
];

export function generateAnimationArray(
  selectedAlgorithm: SortingAlhorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortArrayAnimation(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}

export const sortingAlgorithmsData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "Un algoritmo de ordenación simple basado en comparaciones. El ordenamiento por burbuja compara y intercambia repetidamente elementos adyacentes si están en el orden incorrecto, moviendo los elementos más grandes hacia el final con cada pasada a través de la lista. Este proceso continúa hasta que la lista esté ordenada y no se necesiten más intercambios.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "El ordenamiento por inserción construye el arreglo final ordenado un elemento a la vez, tomando repetidamente el siguiente elemento no ordenado e insertándolo en su posición correcta entre los elementos previamente ordenados. Este proceso continúa hasta que todos los elementos hayan sido insertados en su lugar correcto, resultando en una lista ordenada.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "El ordenamiento por selección funciona encontrando repetidamente el elemento mínimo de la porción no ordenada de la lista e intercambiándolo con el elemento en la posición actual. Este proceso se repite para cada posición en la lista, moviendo el límite de las porciones ordenadas y no ordenadas un elemento hacia adelante cada vez hasta que toda la lista esté ordenada.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "El ordenamiento por mezcla divide la lista no ordenada en n sublistas, cada una conteniendo un elemento (una lista de un solo elemento se considera ordenada), y luego mezcla repetidamente estas sublistas para producir nuevas sublistas ordenadas hasta que solo queda una sublista, que es la lista ordenada. Este algoritmo usa un enfoque de divide y vencerás, dividiendo la lista a la mitad recursivamente y fusionando las mitades ordenadas.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "El ordenamiento rápido selecciona un elemento 'pivote' del arreglo y divide los otros elementos en dos subarreglos, según si son menores o mayores que el pivote. Los subarreglos se ordenan recursivamente, y los subarreglos ordenados se combinan con el pivote para formar el arreglo ordenado.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
