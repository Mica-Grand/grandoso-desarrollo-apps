import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AddItem from "./components/AddItem";
import Modal from "./components/Modal";
import Lista from "./components/Lista/index";

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [textValue, setTextValue] = useState("");

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = (textValue) => {
    if (textValue === "") {
      return;
    }

    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue, completed: false },
    ]);
    setTextValue("");
    const itemName=textValue;
  };

  const toggleTaskCompletion = (index) => {
    setItemsList((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const onHandleDelete = (index) => {
    setItemsList((prevState) => prevState.filter((_, i) => i !== index));
  };

  const onHandleModal = (index, onHandleDelete) => {
    setItemSelected(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My tasks list</Text>
      <AddItem
        onHandleChangeItem={onHandleChangeItem}
        addItem={addItem}
        textValue={textValue}
        setTextValue={setTextValue}
      />
      <View style={styles.listContainer}>
        <Lista
          itemsList={itemsList}
          toggleTaskCompletion={toggleTaskCompletion}
          onHandleModal={onHandleModal}
        />
      </View>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onHandleDelete={onHandleDelete}
        itemSelected={itemSelected}
        itemsList={itemsList}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    marginBottom: 25,
  },

  listContainer: {
    marginTop: 25,
  },
});
