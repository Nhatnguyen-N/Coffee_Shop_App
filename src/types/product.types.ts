import { ImageSourcePropType } from "react-native";

export type ProductSize = 'S' | 'M' | 'L' | '250gm' | '500gm' | '1Kg'; // Kết hợp cả 2 loại size

export type Price = {
  size?: ProductSize;
  price?: string;
  currency?: string;
  quantity?: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: ImageSourcePropType;
  imagelink_portrait: ImageSourcePropType;
  ingredients: string;
  special_ingredient: string;
  prices: Price[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: 'Coffee' | 'Bean'; // Giới hạn giá trị cụ thể
  index: number;
};
export type Cart = {
  id: string,
  index: number,
  name: string,
  roasted: boolean,
  imagelink_square: ImageSourcePropType,
  special_ingredient: string,
  type: 'Coffee' | 'Bean';
  ItemPrice: string,
  prices: Price[],
}

// Type cho cả mảng CoffeeData
export type ProductData = Product[];