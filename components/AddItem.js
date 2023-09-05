import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AddItem = ({ addItem, textValue, onHandleChangeItem }) => {


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={textValue}
        onChangeText={onHandleChangeItem}
      />
      <TouchableOpacity onPress={() => addItem(textValue)}>
        <FontAwesome name="plus-circle" size={40} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  inputContainer: {
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  },
};

export default AddItem;