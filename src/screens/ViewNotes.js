import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FAB } from "react-native-paper";
import Header from "../components/Header";
import NoteItem from "../components/NoteItem";
import { colors } from "../global/colors";

export default function ViewNotes(props) {
  const data = [
    {
      id: 1,
      title: "Title 1",
      content:
        "Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content 3",
    },
    {
      id: 4,
      title: "Title 4",
      content: "Content 4",
    },
    {
      id: 5,
      title: "Title 5",
      content: "Content 5",
    },

  ];

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <NoteItem title={item.title} content={item.content}/>
          )}
          keyExtractor={(item) => item.id}
        />
        {/* <FAB
          icon="plus"
          label="Thêm ghi chú"
          color="#fff"
          style={[styles.fab, { backgroundColor: colors.background }]}
          onPress={() => props.navigation.navigate("AddNotes")}
        /> */}
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
    padding: 20,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
