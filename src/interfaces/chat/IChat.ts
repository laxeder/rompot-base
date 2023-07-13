import type { ChatType } from "../../types/chat/ChatType";

import IChatController from "./IChatController";

/** Interface da sala de bate-papo */
export default interface IChat extends IChatController {
  /** ID do chat */
  id: string;
  /** Tipo do chat */
  type: ChatType;
  /** Nome do chat */
  name: string;
}
