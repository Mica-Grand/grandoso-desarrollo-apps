import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ListaItem = ({ item, index, toggleTaskCompletion, onHandleModal }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          item.completed ? styles.completedButton : null,
        ]}
        onPress={() => toggleTaskCompletion(index)}
      >
        <FontAwesome
          name={item.completed ? "check-square-o" : "square-o"}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
      <Text
        style={[styles.textItem, item.completed ? styles.completedText : null]}
      >
        {item.value}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onHandleModal(index)}
      >
        <FontAwesome name="trash-o" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginVertical: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  button: {
    backgroundColor: "#3CB371",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  completedButton: {
    backgroundColor: "#888",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
};

export default ListaItem;
