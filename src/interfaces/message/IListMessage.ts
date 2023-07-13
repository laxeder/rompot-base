import type { List } from "../../types/message/List";

import { MessageType } from "@enums/Message";

import IMessage from "./IMessage";

/** Interface da mensagem de tipo lista */
export default interface IListMessage extends IMessage {
  readonly type: MessageType.List;

  /** Texto do botão */
  button: string;
  /** Rodapé da lista */
  footer: string;
  /** Titulo da lista */
  title: string;
  /** Lista */
  list: List[];
}
