import "react-redux";
import { RootState } from "../statesManager";

declare module "react-redux" {
  export type DefaultRootState = RootState;
}
