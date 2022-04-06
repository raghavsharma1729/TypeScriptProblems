interface Ladder {
  foot: number;
  top: number;
}

interface Snake {
  head: number;
  tail: number;
}

interface Board {
  startPoint?: number;
  endPoint?: number;
  ladders?: Ladder[];
  snakes?: Snake[];
}

export { Ladder, Snake, Board };
