import {
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS } from "../theme/theme";
import LottieView, { AnimationObject } from "lottie-react-native";

interface PopUpAnimationProps {
  style?: StyleProp<ViewStyle>;
  source:
    | string // Đường dẫn file local
    | AnimationObject // JSON animation object
    | { uri: string } // Remote URL
    | undefined; // Nguồn hình ảnh
}

const PopUpAnimation = ({ source, style }: PopUpAnimationProps) => {
  return (
    <View style={styles.lottiesAnimationContainer}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};

export default PopUpAnimation;

const styles = StyleSheet.create({
  lottiesAnimationContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: "center",
  },
});
