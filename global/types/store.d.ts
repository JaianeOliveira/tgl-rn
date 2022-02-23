import "react-redux";
import { RootState } from "../statesManager/MyStore";

declare module "react-redux" {
  export type DefaultRootState = RootState;
}
