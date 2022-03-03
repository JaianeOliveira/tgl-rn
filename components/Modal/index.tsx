import { Modal } from "react-native";
import React from "react";

import { Backdrop, Container } from "./styles";

const ModalComponent = (props: any) => {
  return (
    <Modal
      animationType="slide"
      visible={props.modalVisible}
      transparent={true}
      onRequestClose={() => props.modalVisible(false)}
    >
      <Backdrop>
        <Container>{props.children}</Container>
      </Backdrop>
    </Modal>
  );
};

export default ModalComponent;
