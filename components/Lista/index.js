import React from "react";
import { FlatList } from "react-native";
import ListaItem from "./ListaItem";

const Lista = ({ itemsList, toggleTaskCompletion, onHandleModal }) => {
  return (
    <FlatList
      data={itemsList}
      renderItem={({ item, index }) => (
        <ListaItem
          item={item}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          onHandleModal={onHandleModal}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Lista;
