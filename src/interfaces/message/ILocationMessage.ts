import { MessageType } from "@enums/Message";

import IMessage from "./IMessage";

/** Interface da mensagem de tipo localização */
export default interface ILocationMessage extends IMessage {
  readonly type: MessageType.Location;

  /** * Latitude */
  latitude: number;
  /** * Longitude */
  longitude: number;
}
