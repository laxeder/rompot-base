import { MessageType } from "@enums/Message";

import IMessage from "./IMessage";

/** Interface da mensagem de tipo reação */
export default interface IReactionMessage extends IMessage {
  readonly type: MessageType.Reaction;
}
