import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import DetailScreen from "./src/screens/DetailScreen";

navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: DetailScreen
},{
  initialRouteName:"Search",
  defaultNavigationOptions:{
    title:"Business Search"
  },
});

export default createAppContainer(navigator);