import { MessageType } from "../../enums/Message";
import IPollMessage from "./IPollMessage";
/** Interface da mensagem de tipo atualização de enquete */
export default interface IPollUpdateMessage extends IPollMessage {
    readonly type: MessageType.PollUpdate;
}
