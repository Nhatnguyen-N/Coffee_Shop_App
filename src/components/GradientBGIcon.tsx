import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING } from "../theme/theme";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

type IconProps =
  | {
      iconPack: "Ionicons";
      name: React.ComponentProps<typeof Ionicons>["name"];
    }
  | {
      iconPack: "MaterialIcons";
      name: React.ComponentProps<typeof MaterialIcons>["name"];
    }
  | {
      iconPack: "FontAwesome";
      name: React.ComponentProps<typeof FontAwesome>["name"];
    }
  | {
      iconPack: "AntDesign";
      name: React.ComponentProps<typeof AntDesign>["name"];
    };

type GradientBGIconProps = IconProps & {
  color?: string;
  size?: number;
  gradientColors?: string[];
};

const GradientBGIcon = (props: GradientBGIconProps) => {
  const {
    iconPack,
    name,
    color = "#FFF",
    size = 24,
    gradientColors = ["#FF9800", "#F44336"],
  } = props;

  const getIconComponent = () => {
    switch (iconPack) {
      case "Ionicons":
        return <Ionicons name={name} color={color} size={size} />;
      case "MaterialIcons":
        return <MaterialIcons name={name} color={color} size={size} />;
      case "FontAwesome":
        return <FontAwesome name={name} color={color} size={size} />;
      case "AntDesign":
        return <AntDesign name={name} color={color} size={size} />;
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientBG}
      >
        {getIconComponent()}
      </LinearGradient>
    </View>
  );
};

export default GradientBGIcon;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
  linearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
  },
});
