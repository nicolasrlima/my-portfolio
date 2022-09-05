import "@emotion/react";
import { RootTheme } from "./Theme.types";

declare module "@emotion/react" {
  export interface Theme extends RootTheme {}
}
