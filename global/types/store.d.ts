import "react-redux";
import { RootState } from "redux";

declare module "react-redux" {
  export type DefaultRootState = RootState;
}
