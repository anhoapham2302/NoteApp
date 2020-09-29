import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, Title } from "react-native-paper";

export default function Header({ titleText }) {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#f1c40f",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#fff",
  },
});
