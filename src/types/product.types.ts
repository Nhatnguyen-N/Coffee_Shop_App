import { ImageSourcePropType } from "react-native";

type ProductSize = 'S' | 'M' | 'L' | '250gm' | '500gm' | '1Kg'; // Kết hợp cả 2 loại size

type Price = {
  size: ProductSize;
  price: string;
  currency: string;
};

type Product = {
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


// Type cho cả mảng CoffeeData
type ProductData = Product[];