import {
  TouchableOpacity,
  Modal as NewModal,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";

const Modal = ({
  modalVisible,
  onHandleDelete,
  itemSelected,
  setModalVisible,
  itemsList,

}) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.modalTitle}>Manage task</Text>
          </View>
          <View >
            <Text style={styles.modalMessage}>Are you sure you want to delete the task "{itemsList[itemSelected]?.value}"?</Text>
          </View>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              style={[styles.cancelButton, styles.modalButtons]}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.confirmButton, styles.modalButtons]}
              onPress={() => {
                onHandleDelete(itemSelected);
                setModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
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
  modalButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalButtons: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  confirmButton: {
    backgroundColor: "#3CB371",
  },
  cancelButton: {
    backgroundColor: "#888",
  },
});
