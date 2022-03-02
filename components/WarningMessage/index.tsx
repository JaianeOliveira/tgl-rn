import Toast from "react-native-toast-message";

const WarningMessage = (message: string, secondMessage?: string) => {
  return Toast.show({ type: "info", text1: message, text2: secondMessage });
};

export default WarningMessage;
