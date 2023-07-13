import { MessageType } from "../../enums/Message";
import { IUser } from "../user";
import IMessage from "./IMessage";
/** Interface da mensagem de tipo contato */
export default interface IContactMessage extends IMessage {
    readonly type: MessageType.Contact;
    /** Contatos da mensagem */
    contacts: Record<string, IUser>;
}
