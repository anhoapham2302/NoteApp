import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { deleteNote } from "../actions/note";
import { colors } from "../global/colors";
const { width } = Dimensions.get("window");
export default function NoteItem(props) {
  const dispatch = useDispatch();

  const handleDeleteNote = () => {
    const id = props.id;

    const action = deleteNote(id);
    dispatch(action);
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text numberOfLines={3} style={styles.content}>
          {props.content}
        </Text>
        <Button icon="delete" mode="outlined" color="#fff" style={{width: 100, alignSelf: "flex-end", flex: 1, borderColor:"#fff"}} onPress={handleDeleteNote}>
    Xóa
  </Button>
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
