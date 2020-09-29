import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";

export default function AddNotes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Thêm Ghi Chú</Text>
      </View>
    </View>
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
});
