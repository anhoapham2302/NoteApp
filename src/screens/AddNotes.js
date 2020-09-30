import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { FAB } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addNote } from "../actions/note";
import Header from "../components/Header";
import { colors } from "../global/colors";

const { width } = Dimensions.get("window");

export default function AddNotes(props) {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const dispatch = useDispatch();

  const handleAddNote = () => {
    const newNote = {
      title: title,
      content: content,
    }

    const action = addNote(newNote);
    dispatch(action);

    props.navigation.goBack();
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.background }]}>
            Tiêu đề
          </Text>
        </View>
        <TextInput
          onChangeText={(title) => setTitle(title)}
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
        onChangeText={(content) => setContent(content)}
        multiline
        numberOfLines = {5}
          style={[styles.contentInput, { borderColor: colors.background }]}
        ></TextInput>
      </View>
      <FAB
          icon="check"
          label="Hoàn tất"
          color="#fff"
          style={[styles.fab, { backgroundColor: colors.background }]}
          onPress={handleAddNote}
        />
    </View>
    </>
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
    marginLeft: width * 0.015,
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
    width: width * 0.95,
    marginLeft: width * 0.025,
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
    marginLeft: width * 0.015,
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
    width: width * 0.95,
    marginLeft: width * 0.025,
    borderWidth: 1,
    borderRadius: 5,
    position: "absolute",
    zIndex: 0,
    overflow: "scroll"
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
