import Toast from "react-native-toast-message";

const SuccessMessage = (message: string, secondMessage?: string) => {
  return Toast.show({ type: "success", text1: message, text2: secondMessage });
};

export default SuccessMessage;
