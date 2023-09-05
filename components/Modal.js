import {
  Button,
  Modal as NewModal,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";

const Modal = ({ modalVisible, onHandleDelete, itemSelected, setModalVisible }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text>Manage task</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>Are you sure you want to delete this task?</Text>
          </View>
          <View style={styles.modalButton}>
            <Button
              title="Confirm"
              onPress={() => {
                onHandleDelete(itemSelected);
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  modalTitle: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 20,
    marginBottom: 15,
  },
  modalMessage: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    marginTop: 10,
  },
});
