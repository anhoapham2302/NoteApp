import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, FAB, IconButton, Title } from "react-native-paper";
import { colors } from "../global/colors";

export default function Header(props) {
  console.log(props);
  return (
    <Appbar.Header style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Appbar.Content title={props.headerTitle} subtitle={props.headerSubtitle}/>
        <Appbar.Action icon={props.headerIcon} onPress={()=> props.navigation.navigate(props.screen)} color="#fff"/>
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
    flexDirection: "row",
  },
});
