import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { FAB } from "react-native-paper";
import { colors } from "../global/colors";

const { width } = Dimensions.get("window");

export default function AddNotes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.background }]}>
            Tiêu đề
          </Text>
        </View>
        <TextInput
          style={[styles.titleInput, { borderColor: colors.background }]}
        ></TextInput>
      </View>
      <View style={[styles.inputContainer, {marginTop: 30}]}>
        <View style={styles.contentContainer}>
          <Text style={[styles.content, { color: colors.background }]}>
            Nội dung
          </Text>
        </View>
        <TextInput
          style={[styles.contentInput, { borderColor: colors.background }]}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    marginLeft: width * 0.04,
    width: 85,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  title: {
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold"
  },
  titleInput: {
    marginTop: 38,
    textAlignVertical: "top",
    paddingLeft: 10,
    paddingTop: 12,
    fontSize: 23,
    height: 55,
    width: width * 0.9,
    marginLeft: width * 0.05,
    borderWidth: 1,
    borderRadius: 5,
    position: "absolute",
    zIndex: 0,
  },
  content: {
    fontSize: 20,
    textAlign: "center",
  },
  contentContainer: {
    marginLeft: width * 0.04,
    width: 90,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  contentInput: {
    marginTop: 35,
    textAlignVertical: "top",
    paddingLeft: 10,
    paddingTop: 12,
    fontSize: 20,
    height: 300,
    width: width * 0.9,
    marginLeft: width * 0.05,
    borderWidth: 1,
    borderRadius: 5,
    position: "absolute",
    zIndex: 0,
  },
});
