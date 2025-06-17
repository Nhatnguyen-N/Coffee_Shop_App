import {
  Image,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Product } from "../types/product.types";
import GradientBGIcon from "./GradientBGIcon";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "./CustomIcon";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

export interface ImageBackgroundInfoProps
  extends Pick<
    Product,
    | "imagelink_portrait"
    | "type"
    | "id"
    | "favourite"
    | "name"
    | "special_ingredient"
    | "ingredients"
    | "average_rating"
    | "ratings_count"
    | "roasted"
  > {
  EnableBackHandler: boolean;
  BackHandler: () => void;
  ToggleFavourite: (favourite: boolean, type: string, id: string) => void;
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
    <SafeAreaView>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.itemBackgroundImage}
      >
        {EnableBackHandler ? (
          <View style={styles.imageHeaderBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}
            >
              <GradientBGIcon
                iconPack="AntDesign"
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_18}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}
            >
              <GradientBGIcon
                iconPack="AntDesign"
                name="heart"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}
            >
              <GradientBGIcon
                iconPack="AntDesign"
                name="heart"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.imageInfoOuterContainer}>
          <View style={styles.imageInfoInnerContainer}>
            <View style={styles.infoContainerRow}>
              <View>
                <Text style={styles.itemTitleText}>{name}</Text>
                <Text style={styles.itemSubtitleText}>
                  {special_ingredient}
                </Text>
              </View>
              <View style={styles.itemPropertiesContainer}>
                <View style={styles.properFirst}>
                  {type === "Bean" ? (
                    <AntDesign
                      name={"user"}
                      size={FONTSIZE.size_18}
                      color={COLORS.primaryOrangeHex}
                    />
                  ) : (
                    <Entypo
                      name={"cup"}
                      size={FONTSIZE.size_20}
                      color={COLORS.primaryOrangeHex}
                    />
                  )}

                  <Text
                    style={[
                      styles.propertyTextFirst,
                      {
                        marginTop: SPACING.space_4 + SPACING.space_2,
                      },
                    ]}
                  >
                    {type}
                  </Text>
                </View>
                <View style={styles.properFirst}>
                  {type === "Bean" ? (
                    <Entypo
                      name={"location-pin"}
                      size={FONTSIZE.size_20}
                      color={COLORS.primaryOrangeHex}
                    />
                  ) : (
                    <Entypo
                      name={"drop"}
                      size={FONTSIZE.size_20}
                      color={COLORS.primaryOrangeHex}
                    />
                  )}
                  <Text style={styles.propertyTextLast}>{ingredients}</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainerRow}>
              <View style={styles.ratingContainer}>
                <AntDesign
                  name="star"
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.ratingText}>{average_rating}</Text>
                <Text style={styles.ratingCountText}>{ratings_count}</Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ImageBackgroundInfo;

const styles = StyleSheet.create({
  itemBackgroundImage: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
  },
  imageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  imageInfoInnerContainer: {
    justifyContent: "space-between",
    gap: SPACING.space_15,
  },
  infoContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  itemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  itemPropertiesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.space_20,
  },
  properFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
  },
  propertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  propertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: SPACING.space_10,
    alignItems: "center",
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  ratingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  roastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
  },
  roastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
});
