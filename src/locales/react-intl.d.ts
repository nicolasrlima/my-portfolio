import type { Messages } from "./types";

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof Messages;
    }
  }
}
