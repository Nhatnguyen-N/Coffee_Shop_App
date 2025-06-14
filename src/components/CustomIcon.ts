import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import iconMoonConfig from "../assets/icons/selection.json"
const CustomIcon = createIconSetFromIcoMoon(iconMoonConfig, "app_icons", "app_icons.ttf")
export default CustomIcon;