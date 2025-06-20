import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Cart, Order } from "../types/product.types";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import OrderItemCard from "./OrderItemCard";
type OrderHistoryCardProps = Order & {
  navigationHandler: ({
    index,
    id,
    type,
  }: {
    index: number;
    id: string;
    type: "Coffee" | "Bean";
  }) => void;
};
const OrderHistoryCard = ({
  CartList,
  CartListPrice,
  OrderDate,
  navigationHandler,
}: OrderHistoryCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.headerTitle}>Order Time</Text>
          <Text style={styles.headerSubTitle}>{OrderDate}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.headerTitle}>Total Amount</Text>
          <Text style={styles.headerPrice}>{CartListPrice}</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        {CartList.map((data: Cart, index: number) => (
          <TouchableOpacity
            key={index.toString() + data.id}
            onPress={() =>
              navigationHandler({
                index: data.index,
                id: data.id,
                type: data.type,
              })
            }
          >
            <OrderItemCard {...data} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OrderHistoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    gap: SPACING.space_10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SPACING.space_20,
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  headerSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  headerPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  listContainer: {
    gap: SPACING.space_20,
  },
});
