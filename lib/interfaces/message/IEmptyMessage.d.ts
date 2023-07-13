import { MessageType } from "../../enums/Message";
import IMessage from "./IMessage";
/** Interface da mensagem de tipo vazia */
export default interface IEmptyMessage extends IMessage {
    readonly type: MessageType.Empty;
}
