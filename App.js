import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/searchScreen";
import ResultScreen from "./src/screens/resultsShowScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search For Food" }}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultScreen}
          options={{ title: "Other Images" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
