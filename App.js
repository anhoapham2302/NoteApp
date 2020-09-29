import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddNotes from "./src/screens/AddNotes";
import ViewNotes from "./src/screens/ViewNotes";
import { NavigationContainer } from "@react-navigation/native";

const StackNavigator = createStackNavigator();
const Main = () => {
  return (
    <StackNavigator.Navigator initialRouteName="ViewNotes">
      <StackNavigator.Screen name="ViewNotes" component={ViewNotes} options={{headerShown: false}}/>
      <StackNavigator.Screen name="AddNotes" component={AddNotes} />
    </StackNavigator.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
