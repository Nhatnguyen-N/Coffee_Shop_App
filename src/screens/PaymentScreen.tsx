import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import GradientBGIcon from "../components/GradientBGIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentMethod from "../components/PaymentMethod";
import PaymentFooter from "../components/PaymentFooter";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { useStore } from "../store/store";
import PopUpAnimation from "../components/PopUpAnimation";

const PaymentList = [
  {
    name: "Wallet",
    icon: "icon",
    isIcon: true,
  },
  {
    name: "Google Pay",
    icon: require("../assets/app_images/gpay.png"),
    isIcon: false,
  },
  {
    name: "Apple Pay",
    icon: require("../assets/app_images/applepay.png"),
    isIcon: false,
  },
  {
    name: "Amazon Pay",
    icon: require("../assets/app_images/amazonpay.png"),
    isIcon: false,
  },
];

const PaymentScreen = ({ navigation, route }: any) => {
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart
  );
  const [paymentMode, setPaymentMode] = useState("Credit Card");
  const [showAnimation, setShowAnimation] = useState(false);

  const buttonPressHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate("Tab", { screen: "History" });
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {showAnimation ? (
        <PopUpAnimation
          style={styles.lottieAnimation}
          source={require("../lottie/successful.json")}
        />
      ) : (
        <></>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <GradientBGIcon
              iconPack="AntDesign"
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_18}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Payments</Text>
          <View style={styles.emptyView} />
        </View>
        <View style={styles.paymentOptionsContainer}>
          <TouchableOpacity
            onPress={() => {
              setPaymentMode("Credit Card");
            }}
          >
            <View
              style={[
                styles.creditCardContainer,
                {
                  borderColor:
                    paymentMode === "Credit Card"
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}
            >
              <Text style={styles.creditCardTitle}>Credit Card</Text>
              <View style={styles.creditCardBG}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.linearGradientStyle}
                >
                  <View style={styles.creditCardRow}>
                    <MaterialCommunityIcons
                      name="integrated-circuit-chip"
                      size={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}
                    />
                    <Fontisto
                      name="visa"
                      size={FONTSIZE.size_30}
                      color={COLORS.primaryWhiteHex}
                    />
                  </View>
                  <View style={styles.creditCardNumberContainer}>
                    <Text style={styles.creditCardNumber}>3879</Text>
                    <Text style={styles.creditCardNumber}>8923</Text>
                    <Text style={styles.creditCardNumber}>6745</Text>
                    <Text style={styles.creditCardNumber}>4638</Text>
                  </View>
                  <View style={styles.creditCardRow}>
                    <View style={styles.creditCardNameContainer}>
                      <Text style={styles.creditCardNameSubitle}>
                        Card Holder Name
                      </Text>
                      <Text style={styles.creditCardNameTitle}>
                        Robert Evans
                      </Text>
                    </View>
                    <View style={styles.creditCardDateContainer}>
                      <Text style={styles.creditCardNameSubitle}>
                        Expiry Date
                      </Text>
                      <Text style={styles.creditCardNameTitle}>02/30</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {PaymentList.map((data: any) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => {
                setPaymentMode(data.name);
              }}
            >
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode}`}
        price={{ price: route.params.amount, currency: "$" }}
        buttonPressHandler={buttonPressHandler}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  lottieAnimation: {
    flex: 1,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  headerContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  emptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  paymentOptionsContainer: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },
  creditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_15 * 2,
    borderWidth: 3,
  },
  creditCardTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_10,
  },
  creditCardBG: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  linearGradientStyle: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_10,
  },
  creditCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  creditCardNumberContainer: {
    flexDirection: "row",
    gap: SPACING.space_10,
    alignItems: "center",
  },
  creditCardNumber: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    letterSpacing: SPACING.space_4 + SPACING.space_2,
  },
  creditCardNameSubitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  creditCardNameTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  creditCardNameContainer: {
    alignItems: "flex-start",
  },
  creditCardDateContainer: {
    alignItems: "flex-end",
  },
});
