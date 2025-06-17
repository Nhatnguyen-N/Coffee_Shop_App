import React from 'react';
import { StyleSheet, TextProps } from 'react-native';
import { createIconSet } from '@expo/vector-icons';

// 1. Định nghĩa glyph map với const assertion
const glyphMap = {
  close: 59665,
  add: 59648,
  bean: 59649,
  // ... thêm các icon khác
} as const;

// 2. Tạo Icon component với kiểu rõ ràng
export const Icon = createIconSet(glyphMap, 'app_icons', 'app_icons.ttf') as React.ComponentType<{
  name: keyof typeof glyphMap;
  size?: number;
  color?: string;
  style?: TextProps['style'];
}>;

// 3. Định nghĩa props
interface CustomIconProps {
  name: keyof typeof glyphMap;
  size?: number;
  color?: string;
  style?: TextProps['style'];
}

// 4. Triển khai component
const CustomIcon = (props: CustomIconProps) => {

};

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
  },
});

export default CustomIcon;