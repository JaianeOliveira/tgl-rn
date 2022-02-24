import Toast from "react-native-toast-message";

const ErrorMessage = (message: string, secondMessage?: string) => {
  return Toast.show({ type: "error", text1: message, text2: secondMessage });
};

export default ErrorMessage;
