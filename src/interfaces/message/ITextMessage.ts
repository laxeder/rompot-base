import { MessageType } from "@enums/Message";

import IMessage from "./IMessage";

/** Interface da mensagem de tipo texto */
export default interface ITextMessage extends IMessage {
  readonly type: MessageType.Text;
}
