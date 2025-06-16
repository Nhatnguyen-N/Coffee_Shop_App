import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BORDERRADIUS, SPACING } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
const names = [{ name: "add" }, { name: "home" }];
interface BGIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}
const BGIcon = ({ name, color, size, BGColor }: BGIconProps) => {
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
    <View style={[styles.iconBG, { backgroundColor: BGColor }]}>
      <Ionicons
        name={value === "add" ? "add" : "home"}
        color={color}
        size={size}
      />
    </View>
  );
};

export default BGIcon;

const styles = StyleSheet.create({
  iconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_8,
  },
});
