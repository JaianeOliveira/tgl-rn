export type GameInfo = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};

export type gameData = {
  min_cart_value: number | null;
  types: GameInfo[];
};
