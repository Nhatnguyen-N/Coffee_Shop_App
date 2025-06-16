import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useStore } from "../store/store";
import { COLORS } from "../theme/theme";
import ImageBackgroundInfo, {
  ImageBackgroundInfoProps,
} from "../components/ImageBackgroundInfo";

const DetailsScreen = ({ navigation, route }: any) => {
  const ItemofIndex: ImageBackgroundInfoProps = useStore((state: any) =>
    route.params.type === "Coffee" ? state.CoffeeList : state.BeanList
  )[route.params.index];

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemofIndex.imagelink_portrait}
          type={ItemofIndex.type}
          id={ItemofIndex.id}
          favourite={ItemofIndex.favourite}
          name={ItemofIndex.name}
          special_ingredient={ItemofIndex.special_ingredient}
          ingredients={ItemofIndex.ingredients}
          average_rating={ItemofIndex.average_rating}
          ratings_count={ItemofIndex.ratings_count}
          roasted={ItemofIndex.roasted}
          BackHandler={() => {}}
          ToggleFavourite={() => {}}
        />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
});
