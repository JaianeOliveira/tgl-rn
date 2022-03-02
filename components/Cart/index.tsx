import { View, Text, Modal } from "react-native";
import React, { useState } from "react";

const Cart = (props: { cartVisible: boolean }) => {
  return (
    <Modal
      animationType="slide"
      visible={props.cartVisible}
      style={{ width: "50%", height: "50%" }}
    >
      <Text>Modaal</Text>
    </Modal>
  );
};

export default Cart;
