import LoginPage from "./screens/LoginPage";

import { ThemeProvider } from "styled-components";

import Colors from "./global/constants/colors";

export default function App() {
  return (
    <ThemeProvider theme={Colors}>
      <LoginPage />
    </ThemeProvider>
  );
}
