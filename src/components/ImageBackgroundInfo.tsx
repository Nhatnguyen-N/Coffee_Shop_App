import { ImageProps, StyleSheet, Text, View } from "react-native";
import React from "react";

export interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}: ImageBackgroundInfoProps) => {
  return (
    <View>
      <Text>ImageBackgroundInfo</Text>
    </View>
  );
};

export default ImageBackgroundInfo;

const styles = StyleSheet.create({});
