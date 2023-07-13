/// <reference types="node" />
import { MessageType } from "../../enums/Message";
import IMediaMessage from "./IMediaMessage";
/** Interface da mensagem de tipo arquivo */
export default interface IFileMessage extends IMediaMessage {
    readonly type: MessageType.File;
    /** @returns Retorna o arquivo da mensagem */
    getFile(): Promise<Buffer>;
}
