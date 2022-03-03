import styled from "styled-components/native";

import { Card } from "global/styles";
import Colors from "global/constants/colors";

export const Backdrop = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(112, 112, 112, 0.5);
`;

export const Container = styled(Card)`
  max-height: 454px;
  min-height: 300px;
  width: 80%;
  justify-content: space-between;
  overflow: hidden;
`;

