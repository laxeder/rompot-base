import type { Button } from "../../types/message/Button";
import { MessageType } from "../../enums/Message";
import IMessage from "./IMessage";
/** Interface da mensagem de tipo botão */
export default interface IButtonMessage extends IMessage {
    /** Tipo dos botões */
    type: MessageType.Button | MessageType.TemplateButton;
    /** Rodapé da mensagem */
    footer: string;
    /** Botões da mensagem */
    buttons: Button[];
}
