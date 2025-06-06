export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: {
    id: string | number;
    name: string;
  };
}
