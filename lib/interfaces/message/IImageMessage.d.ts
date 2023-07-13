/// <reference types="node" />
import { MessageType } from "../../enums/Message";
import IMediaMessage from "./IMediaMessage";
/** Interface da mensagem de tipo imagem */
export default interface IImageMessage extends IMediaMessage {
    readonly type: MessageType.Image;
    /** @returns Retorna a imagem da mensagem */
    getImage(): Promise<Buffer>;
}
