import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import CoffeeData from "../data/CofffeeData"
import BeansData from "../data/BeansData"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)