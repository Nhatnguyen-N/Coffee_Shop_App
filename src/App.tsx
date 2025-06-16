import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./screens/DetailsScreen";
import PaymentScreen from "./screens/PaymentScreen";
import TabNavigator from "./navigators/TabNavigator";
import { useEffect, useState } from "react";
import { FONTFAMILY } from "./theme/theme";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();
export function App() {
  const [fontsLoaded] = useFonts({
    [FONTFAMILY.poppins_black]: require("./assets/fonts/Poppins-Black.ttf"),
    [FONTFAMILY.poppins_bold]: require("./assets/fonts/Poppins-Bold.ttf"),
    [FONTFAMILY.poppins_extrabold]: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    [FONTFAMILY.poppins_extralight]: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    [FONTFAMILY.poppins_light]: require("./assets/fonts/Poppins-Light.ttf"),
    [FONTFAMILY.poppins_medium]: require("./assets/fonts/Poppins-Medium.ttf"),
    [FONTFAMILY.poppins_regular]: require("./assets/fonts/Poppins-Regular.ttf"),
    [FONTFAMILY.poppins_semibold]: require("./assets/fonts/Poppins-SemiBold.ttf"),
    [FONTFAMILY.poppins_thin]: require("./assets/fonts/Poppins-Thin.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
