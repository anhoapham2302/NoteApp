import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
const { width } = Dimensions.get("window");
export default function NoteItem({ title, content }) {
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={3} style={styles.content}>
          {content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: width * 0.95,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    fontSize: 20,
    color: "#fff",
  },
});
