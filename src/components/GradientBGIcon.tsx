import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
const names = [{ name: "menu" }, { name: "home" }];
interface GradientBGIconProps {
  name?: string;
  color?: string;
  size?: number;
}
const GradientBGIcon = ({ name, color, size }: GradientBGIconProps) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const nameSelected = names.map((i) => {
      if (i.name === name) {
        setValue(name);
      }
    });
    if (!nameSelected) return;
  }, [name]);
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientBG}
      >
        <Ionicons
          name={value === "menu" ? "menu" : "home"}
          color={color}
          size={size}
        />
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
