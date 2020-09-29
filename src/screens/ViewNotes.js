import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FAB } from "react-native-paper";
import Header from "../components/Header";
import { colors } from "../global/colors";

export default function ViewNotes(props) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.titleContainer}>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
          <Text style={styles.title}>Bạn không có ghi chú nào</Text>
        </ScrollView>
        <FAB
          small
          icon="plus"
          label="Thêm ghi chú"
          color="#fff"
          style={[styles.fab, { backgroundColor: colors.background }]}
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
    flex: 1,
  },
  title: {
    fontSize: 20,
    padding: 20
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
