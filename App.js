import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddNotes from "./src/screens/AddNotes";
import ViewNotes from "./src/screens/ViewNotes";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "./src/global/colors";
import { IconButton } from "react-native-paper";

const StackNavigator = createStackNavigator();

const headerStyle = {
  headerStyle: { backgroundColor: colors.background },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 23,
    fontWeight: 'bold',
  },
};
const Main = () => {
  return (
    <StackNavigator.Navigator initialRouteName="ViewNotes">
      <StackNavigator.Screen
        name="ViewNotes"
        component={ViewNotes}
        options={{
          headerTitle: "Ghi chú",
          ...headerStyle,
        }}
      />
      <StackNavigator.Screen
        name="AddNotes"
        component={AddNotes}
        options={{
          headerTitle: "Thêm ghi chú",
          headerRight: () => (
            <IconButton
            icon="check"
            color="#fff"
            size={30}
            onPress={() =>alert("This is button!")}
          />
          ),
          ...headerStyle,
        }}
      />
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
