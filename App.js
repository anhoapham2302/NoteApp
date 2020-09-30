import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddNotes from "./src/screens/AddNotes";
import ViewNotes from "./src/screens/ViewNotes";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "./src/global/colors";
import { IconButton } from "react-native-paper";
import { configureStore } from "./src/store";
import { Provider } from "react-redux";

const store = configureStore();
const StackNavigator = createStackNavigator();

const headerStyle = {
  headerStyle: { backgroundColor: colors.background },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 23,
    fontWeight: "bold",
  },
};
const Main = (props) => {
  return (
    <StackNavigator.Navigator initialRouteName="ViewNotes">
      <StackNavigator.Screen
        name="ViewNotes"
        component={ViewNotes}
        options={({ navigation }) => ({
          headerTitle: "Ghi chú",
          headerRight: () => (
            <IconButton
              icon="plus"
              color="#fff"
              size={35}
              onPress={() => {
                navigation.navigate("AddNotes");
              }}
            />
          ),
          ...headerStyle,
        })}
      />
      <StackNavigator.Screen
        name="AddNotes"
        component={AddNotes}
        options={({ navigation }) => ({
          headerTitle: "Thêm ghi chú",
          headerLeft: false,
          headerRight: () => (
            <IconButton
              icon="close"
              color="#fff"
              size={30}
              onPress={() =>   navigation.navigate("ViewNotes")}
            />
          ),
          ...headerStyle,
        })}
      />
    </StackNavigator.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
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
