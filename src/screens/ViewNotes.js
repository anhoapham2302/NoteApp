import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import Header from "../components/Header";

export default function ViewNotes(props) {
  return (
    <>
      <Header titleText="Ghi chú cuộc đời" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>You do not have any Notes</Text>
        </View>
        <FAB
          small
          icon="plus"
          label="Thêm ghi chú"
          color="#fff"
          style={styles.fab}
          onPress={() => props.navigation.navigate("AddNotes")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    backgroundColor: "#f1c40f",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
